import { getAllFiles, getFileBySlug, getSlugs } from '@/lib/api-helpers'
import { getAuthorBySlug } from '@/lib/api/authors'

const transform = async ({
  frontmatter,
  slug,
}) => {
  const author = await getAuthorBySlug(frontmatter.author)

  // We’re not passing the transform-parameter to this call to avoid an infinite loop here where each newsletter object
  // circularly depends on all other newsletter objects existing first. For the given use case, having one additional
  // layer of related newsletter objects is enough.
  const related = await Promise.all(frontmatter.related.map(slug => getFileBySlug('newsletters', slug, ({
    slug,
  }) => ({
    hero: `/api/newsletters/${slug}/hero.jpg`,
    permalink: `/newsletter/${slug}`,
  }))))

  return {
    author,
    hero: `/api/newsletters/${slug}/hero.jpg`,
    ogImage: `/api/newsletters/${slug}/og-image.jpg`,
    permalink: `/newsletter/${slug}`,
    related,
  }
}

export async function getAllNewsletters() {
  return (
    await getAllFiles('newsletters', transform)
  ).sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
}

export function getAllNewsletterSlugs() {
  return getSlugs('newsletters')
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
  return await getFileBySlug('newsletters', slug, transform)
}
