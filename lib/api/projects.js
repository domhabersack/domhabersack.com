import { getSlugs, readMarkdownFile } from '@/lib/api-helpers'
import getMDXSource from '@/lib/get-mdx-source'

const readProjectFile = slug => readMarkdownFile('projects', slug, async ({
  content,
  frontmatter,
  slug,
}) => {
  const figures = frontmatter.figures?.reduce((obj, figure) => {
    const [, figureName] = figure.match(/(.*)\..*$/)

    return ({
      ...obj,
      [figureName]: `/api/projects/${slug}/images/${figure}`,
    })
  }, {}) ?? null

  const mdxSource = await getMDXSource(content, {
    figures,
  })

  return {
    figures,
    hero: `/api/projects/${slug}/images/hero.png`,
    mdxSource,
    permalink: `/projects/${slug}`,
  }
})

export async function getAllProjects() {
  return (await Promise.all(getSlugs('projects').map(readProjectFile))).sort((a, b) => new Date(b.date) - new Date(a.date))
}

export function getAllProjectSlugs() {
  return getSlugs('projects')
}

export async function getProjectBySlug(slug) {
  return await readProjectFile(slug)
}
