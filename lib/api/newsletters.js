import { getSubDirectories, readMarkdownFile } from '@/lib/api-helpers'
import { getAuthorBySlug } from '@/lib/api/authors'
import getMDXSource from '@/lib/get-mdx-source'

const buildFindBySlug = allItems => slug => allItems.find(item => item.slug === slug)

export async function getAllNewsletters() {
  const directories = getSubDirectories('_newsletters')

  return (await Promise.all(directories.map(async slug => {
    const {
      content,
      frontmatter,
    } = readMarkdownFile(`_newsletters/${slug}/index.mdx`)

    const author = await getAuthorBySlug(frontmatter.author)

    const figures = frontmatter.figures?.reduce((obj, figure) => {
      const [, figureName] = figure.match(/(.*)\..*$/)

      return ({
        ...obj,
        [figureName]: `/api/newsletters/${slug}/images/${figure}`,
      })
    }, {}) ?? null

    const mdxSource = await getMDXSource(content, {
      figures,
    })

    return {
      ...frontmatter,
      author,
      figures,
      hero: `/api/newsletters/${slug}/images/hero.jpg`,
      mdxSource,
      permalink: `/newsletter/archive/${slug}`,
      slug,
    }
  }))).sort((a, b) => new Date(b.date) - new Date(a.date))
}

export function getAllNewsletterSlugs() {
  return getSubDirectories('_newsletters')
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
