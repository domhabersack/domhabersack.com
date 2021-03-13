import { getSubDirectories, readMarkdownFile } from '@/lib/api-helpers'
import getMDXSource from '@/lib/get-mdx-source'

async function transform({
  content,
  frontmatter,
  slug,
}) {
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
}

export async function getAllProjects() {
  const directories = getSubDirectories('_projects')

  return (await Promise.all(directories.map(async slug =>
    await readMarkdownFile(`_projects/${slug}/index.mdx`, slug, transform)
  ))).sort((a, b) => new Date(b.date) - new Date(a.date))
}

export function getAllProjectSlugs() {
  return getSubDirectories('_projects')
}

export async function getProjectBySlug(slug) {
  return await readMarkdownFile(`_projects/${slug}/index.mdx`, slug, transform)
}
