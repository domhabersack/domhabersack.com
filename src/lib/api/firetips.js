import { getAllFiles, getFileBySlug, getSlugs } from '@/lib/api-helpers'
import { getTagByTitle } from '@/lib/api/firetip-tags'

const transform = async ({
  frontmatter,
  slug,
}) => {
  const tags = await Promise.all(frontmatter.tags?.map(getTagByTitle))

  return {
    permalink: `/firetips/${slug}`,
    tags,
  }
}

export async function getAllFiretips() {
  return (
    await getAllFiles('firetips', transform)
  ).sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
}

export function getAllFiretipSlugs() {
  return getSlugs('firetips')
}

export async function getFiretipBySlug(slug) {
  return await getFileBySlug('firetips', slug, transform)
}
