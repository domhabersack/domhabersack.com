import { buildGetSlugs, buildReadMarkdownFile } from '../api-helpers'
import getMDXSource from '@/lib/get-mdx-source'

const getSlugs = buildGetSlugs('pages')

const readPageFile = buildReadMarkdownFile('pages', async ({
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
  return (await Promise.all(getSlugs().map(readPageFile)))
}

export function getAllPageSlugs() {
  return getSlugs()
}

export async function getPageBySlug(slug) {
  return await readPageFile(slug)
}
