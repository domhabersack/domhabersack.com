import { getAllFiles, getFileBySlug, getSlugs } from '@/lib/api-helpers'

const transform = async ({
  frontmatter,
  slug,
}) => {
  return {
    breadcrumbs: [
      {
        label: 'Fire tips',
        url: '/firetips',
      }, {
        label: frontmatter.title,
      },
    ],
    permalink: `/${slug}`,
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
