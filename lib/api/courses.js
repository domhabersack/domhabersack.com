import { getAllFiles, getFileBySlug, getSlugs } from '@/lib/api-helpers'

const transform = ({
  slug,
}) => ({
  permalink: `/courses/${slug}`,
})

export async function getAllCourses() {
  return (
    await getAllFiles('courses', transform)
  ).sort((a, b) => new Date(b.date) - new Date(a.date))
}

export function getAllCourseSlugs() {
  return getSlugs('courses')
}

export async function getCourseBySlug(slug) {
  return await getFileBySlug('courses', slug, transform)
}
