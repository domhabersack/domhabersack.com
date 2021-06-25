import { getAllFiles, getFileBySlug, getSlugs } from '@/lib/api-helpers'
import { getAuthorBySlug } from '@/lib/api/authors'

const transform = async ({
  frontmatter,
  slug,
}) => {
  const author = await getAuthorBySlug(frontmatter.author)

  return {
    author,
    ogImage: `/api/posts/${slug}/og-image.jpg`,
    permalink: `/posts/${slug}`,
  }
}

export async function getAllPosts() {
  return (
    await getAllFiles('posts', transform)
  ).sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
}

export function getAllPostSlugs() {
  return getSlugs('posts')
}

export async function getLatestPosts({ limit }) {
  const allPosts = await getAllPosts()

  return allPosts.slice(0, limit)
}

export async function getPostBySlug(slug) {
  return await getFileBySlug('posts', slug, transform)
}
