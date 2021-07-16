import { getAllFiles, getFileBySlug } from '@/lib/api-helpers'

const transform = async ({
  frontmatter,
  slug,
}) => {
  const { embedded } = frontmatter

  const newsletter = embedded?.newsletter ? (await getFileBySlug('newsletters', embedded.newsletter, ({ slug }) => ({
    permalink: `/${slug}`,
  }))) : null

  const project = embedded?.project ? (await getFileBySlug('projects', embedded.project, ({ slug }) => ({
    permalink: `/${slug}`,
  }))) : null

  return {
    createdAt: slug,
    embedded: {
      newsletter,
      project,
    },
  }
}

export async function getAllMilestones() {
  return (
    await getAllFiles('milestones', transform)
  ).sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
}

export async function getMilestoneBySlug() {
  return await getFileBySlug('milestones', slug, transform)
}
