import matter from 'gray-matter'

import { getSubDirectories, readFile } from '../api-helpers'
import getMDXSource from '@/lib/get-mdx-source'

export async function getAllPages() {
  const directories = getSubDirectories('_pages')

  return (await Promise.all(directories.map(async ({
    name,
  }) => {
    const file = readFile(`_pages/${name}/index.mdx`)

    const {
      content,
      data,
    } = matter(file)

    const slug = name

    const figures = data.figures?.reduce((obj, figure) => {
      const [, figureName] = figure.match(/(.*)\..*$/)

      return ({
        ...obj,
        [figureName]: `/api/pages/${name}/images/${figure}`,
      })
    }, {}) ?? null

    const mdxSource = await getMDXSource(content, {
      figures,
    })

    return {
      ...data,
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
