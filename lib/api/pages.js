import { getSlugs, readMarkdownFile } from '@/lib/api-helpers'
import getMDXSource from '@/lib/get-mdx-source'

const readPageFile = slug => readMarkdownFile('pages', slug, async ({
  content,
  frontmatter,
  slug,
}) => {
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
})

export async function getAllPages() {
  return await Promise.all(getSlugs('pages').map(readPageFile))
}

export function getAllPageSlugs() {
  return getSlugs('pages')
}

export async function getPageBySlug(slug) {
  return await readPageFile(slug)
}
