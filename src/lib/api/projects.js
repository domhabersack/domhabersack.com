import { getAllFiles, getFileBySlug, getSlugs } from '@/lib/api-helpers'

const transform = ({
  slug,
}) => ({
  hero: `/api/projects/${slug}/hero.png`,
  ogImage: `/api/projects/${slug}/og-image.jpg`,
  permalink: `/projects/${slug}`,
})

export async function getAllProjects() {
  return (
    await getAllFiles('projects', transform)
  ).sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
}

export function getAllProjectSlugs() {
  return getSlugs('projects')
}

export async function getProjectBySlug(slug) {
  return await getFileBySlug('projects', slug, transform)
}
