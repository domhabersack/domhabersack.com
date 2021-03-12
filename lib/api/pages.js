import { getSubDirectories, readMarkdownFile } from '../api-helpers'
import getMDXSource from '@/lib/get-mdx-source'

export async function getAllPages() {
  const directories = getSubDirectories('_pages')

  return (await Promise.all(directories.map(async ({
    name: slug,
  }) => {
    const {
      content,
      frontmatter,
    } = readMarkdownFile(`_pages/${slug}/index.mdx`)

    const figures = frontmatter.figures?.reduce((obj, figure) => {
      const [, figureName] = figure.match(/(.*)\..*$/)

      return ({
        ...obj,
        [figureName]: `/api/pages/${slug}/images/${figure}`,
      })
    }, {}) ?? null

    const mdxSource = await getMDXSource(content, {
      figures,
    })

    return {
      ...frontmatter,
      figures,
      mdxSource,
      permalink: `/${slug}`,
      slug,
    }
  })))
}

export async function getPageBySlug(slug) {
  const allPages = await getAllPages()

  return allPages.find(page => page.slug === slug)
}
