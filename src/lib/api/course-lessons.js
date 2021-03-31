import { getAllFiles, getFileBySlug, getSlugs } from '@/lib/api-helpers'

const transform = courseSlug => ({
  slug,
}) => ({
  permalink: `/courses/${courseSlug}/${slug}`,
})

export async function getAllLessonsByCourseSlug(courseSlug) {
  return (
    await getAllFiles(`courses/${courseSlug}/lessons`, transform(courseSlug))
  ).sort((a, b) => a.id - b.id)
}

export function getAllLessonSlugsByCourseSlug(courseSlug) {
  return getSlugs(`courses/${courseSlug}/lessons`)
}

export async function getLessonBySlugs(courseSlug, lessonSlug) {
  return await getFileBySlug(`courses/${courseSlug}/lessons`, lessonSlug, transform(courseSlug))
}
