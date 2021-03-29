import { getAllFiles, getFileBySlug } from '@/lib/api-helpers'

const transform = async ({
  frontmatter,
  slug,
}) => {
  const { embedded } = frontmatter

  const newsletter = embedded?.newsletter ? (await getFileBySlug('newsletters', embedded.newsletter, ({ slug }) => ({
    permalink: `/newsletter/archive/${slug}`,
  }))) : null

  return {
    date: slug,
    embedded: {
      newsletter,
    },
  }
}

export async function getAllMilestones() {
  return (
    await getAllFiles('milestones', transform)
  ).sort((a, b) => new Date(b.date) - new Date(a.date))
}

export async function getMilestoneBySlug() {
  return await getFileBySlug('milestones', slug, transform)
}
