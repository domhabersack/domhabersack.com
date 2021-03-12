import { getSubDirectories, readMarkdownFile } from '@/lib/api-helpers'
import getMDXSource from '@/lib/get-mdx-source'

export async function getAllProjects() {
  const directories = getSubDirectories('_projects')

  return (await Promise.all(directories.map(async ({
    name: slug,
  }) => {
    const {
      content,
      frontmatter,
    } = readMarkdownFile(`_projects/${slug}/index.mdx`)

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
      ...frontmatter,
      figures,
      hero: `/api/projects/${slug}/images/hero.png`,
      mdxSource,
      permalink: `/projects/${slug}`,
      slug,
    }
  }))).sort((a, b) => new Date(b.date) - new Date(a.date))
}

export async function getProjectBySlug(slug) {
  const allProjects = await getAllProjects()

  return allProjects.find(project => project.slug === slug)
}
