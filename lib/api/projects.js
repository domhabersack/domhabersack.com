import { getAllFiles, getFileBySlug, getSlugs } from '@/lib/api-helpers'

const transform = ({
  slug,
}) => {
  return {
    hero: `/api/projects/${slug}/images/hero.png`,
    permalink: `/projects/${slug}`,
  }
}

export async function getAllProjects() {
  return (
    await getAllFiles('projects', transform)
  ).sort((a, b) => new Date(b.date) - new Date(a.date))
}

export function getAllProjectSlugs() {
  return getSlugs('projects')
}

export async function getProjectBySlug(slug) {
  return await getFileBySlug('projects', slug, transform)
}
