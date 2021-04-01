import { getAllFiles, getFileBySlug } from '@/lib/api-helpers'

const transform = async ({
  frontmatter,
  slug,
}) => {
  const { embedded } = frontmatter

  const newsletter = embedded?.newsletter ? (await getFileBySlug('newsletters', embedded.newsletter, ({ slug }) => ({
    permalink: `/newsletter/${slug}`,
  }))) : null

  return {
    createdAt: slug,
    embedded: {
      newsletter,
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
