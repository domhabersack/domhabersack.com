import { getAllFiles, getFileBySlug, getSlugs } from '@/lib/api-helpers'
import { getAuthorBySlug } from '@/lib/api/authors'
import getOgImageForPath from '@/lib/get-og-image-for-path'

const transform = async ({
  frontmatter,
  slug,
}) => {
  const author = await getAuthorBySlug(frontmatter.author)
  const ogImage = getOgImageForPath(slug)

  // We’re not passing the transform-parameter to this call to avoid an infinite loop here where each newsletter object
  // circularly depends on all other newsletter objects existing first. For the given use case, having one additional
  // layer of related newsletter objects is enough.
  const related = frontmatter.related ? await Promise.all(frontmatter.related.map(slug => getFileBySlug('articles', slug, ({
    slug,
  }) => ({
    permalink: `/${slug}`,
  })))) : null

  return {
    author,
    breadcrumbs: [
      {
        label: 'Writing',
        url: '/writing',
      }, {
        label: frontmatter.title,
        url: `/${slug}`,
      },
    ],
    ogImage,
    ogType: 'article',
    permalink: `/${slug}`,
    related,
  }
}

export async function getAllArticles() {
  return (
    await getAllFiles('articles', transform)
  ).sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
}

export function getAllArticleSlugs() {
  return getSlugs('articles')
}

export async function getLatestArticles({ limit }) {
  return (await getAllArticles()).slice(0, limit)
}

export async function getArticleBySlug(slug) {
  return await getFileBySlug('articles', slug, transform)
}
