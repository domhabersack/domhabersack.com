import { getAllFiles, getFileBySlug, getSlugs } from '@/lib/api-helpers'

const transform = ({
  frontmatter,
  slug,
}) => ({
  breadcrumbs: [
    {
      label: 'Projects',
      url: '/projects',
    }, {
      label: frontmatter.title,
    },
  ],
  hero: `/api/projects/${slug}/hero.png`,
  ogImage: `/og-image/${slug}.jpg`,
  permalink: `/${slug}`,
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
