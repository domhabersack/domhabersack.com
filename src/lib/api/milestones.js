import { getAllFiles, getFileBySlug } from '@/lib/api-helpers'

const transform = ({
  slug,
}) => ({
  date: slug,
})

export async function getAllMilestones() {
  return (
    await getAllFiles('milestones', transform)
  ).sort((a, b) => new Date(b.date) - new Date(a.date))
}

export async function getMilestoneBySlug() {
  return await getFileBySlug('milestones', slug, transform)
}
