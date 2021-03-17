import { buildGetSlugs, buildReadMarkdownFile } from '@/lib/api-helpers'
import { getAuthorBySlug } from '@/lib/api/authors'
import getMDXSource from '@/lib/get-mdx-source'

const getSlugs = buildGetSlugs('newsletters')

const readNewsletterFile = buildReadMarkdownFile('newsletters', async ({
  content,
  frontmatter,
  slug,
}) => {
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

  const related = await Promise.all(frontmatter.related.map(buildReadMarkdownFile('newsletters')))

  return {
    author,
    figures,
    hero: `/api/newsletters/${slug}/images/hero.jpg`,
    mdxSource,
    permalink: `/newsletter/archive/${slug}`,
    related,
  }
})

export async function getAllNewsletters() {
  return (await Promise.all(getSlugs().map(readNewsletterFile))).sort((a, b) => new Date(b.date) - new Date(a.date))
}

export function getAllNewsletterSlugs() {
  return getSlugs()
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
  return await readNewsletterFile(slug)
}
