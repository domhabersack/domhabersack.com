import matter from 'gray-matter'

import { getSubDirectories } from '@/api-helpers'
import { getAuthorBySlug } from '@/lib/api/authors'
import getMDXSource from '@/lib/get-mdx-source'

const buildFindBySlug = allItems => slug => allItems.find(item => item.slug === slug)

export async function getAllNewsletters() {
  const directories = getSubDirectories('_newsletters')

  return (await Promise.all(directories.map(async ({
    name,
  }) => {
    const file = readFile(`_newsletters/${name}/index.mdx`)

    const [, date, slug] = name.match(/^(\d+-\d+-\d+)-(.*)$/)

    const {
      content,
      data,
    } = matter(file)

    const author = await getAuthorBySlug(data.author)

    const figures = data.figures?.reduce((obj, figure) => {
      const [, figureName] = figure.match(/(.*)\..*$/)

      return ({
        ...obj,
        [figureName]: `/api/newsletters/${name}/images/${figure}`,
      })
    }, {}) ?? null

    const mdxSource = await getMDXSource(content, {
      figures,
    })

    return {
      ...data,
      author,
      date,
      figures,
      hero: `/api/newsletters/${name}/images/hero.jpg`,
      mdxSource,
      permalink: `/newsletter/archive/${slug}`,
      slug,
    }
  }))).sort((a, b) => new Date(b.date) - new Date(a.date))
}

export async function getFeaturedNewsletters() {
  const allNewsletters = await getAllNewsletters()

  return allNewsletters.filter(newsletter => newsletter.isFeatured)
}

export async function getLatestNewsletters({ limit }) {
  const allNewsletters = await getAllNewsletters()

  return allNewsletters.slice(0, limit)
}

export async function getNewsletterBySlug(slug) {
  const allNewsletters = await getAllNewsletters()
  const findBySlug = buildFindBySlug(allNewsletters)

  const newsletter = findBySlug(slug)

  return {
    ...newsletter,
    related: newsletter.related.map(findBySlug)
  }
}
