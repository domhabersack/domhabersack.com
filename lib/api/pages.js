import { getSubDirectories, readMarkdownFile } from '../api-helpers'
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
      [figureName]: `/api/pages/${slug}/images/${figure}`,
    })
  }, {}) ?? null

  const mdxSource = await getMDXSource(content, {
    figures,
  })

  return {
    figures,
    mdxSource,
    permalink: `/${slug}`,
  }
}

export async function getAllPages() {
  const directories = getSubDirectories('_pages')

  return (await Promise.all(directories.map(async slug => {
    await readMarkdownFile(`_pages/${slug}/index.mdx`, slug, transform)
  })))
}

export function getAllPageSlugs() {
  return getSubDirectories('_pages')
}

export async function getPageBySlug(slug) {
  await readMarkdownFile(`_pages/${slug}/index.mdx`, slug, transform)
}
