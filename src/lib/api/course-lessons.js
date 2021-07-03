import { getAllFiles, getFileBySlug, getSlugs } from '@/lib/api-helpers'
import { getCourseBySlug } from '@/lib/api/courses'

const transform = course => ({
  frontmatter,
  slug,
}) => ({
  breadcrumbs: [
    {
      label: 'Courses',
      url: '/courses',
    }, {
      label: course.title,
      url: course.permalink,
    }, {
      label: frontmatter.title,
    }
  ],
  ogImage: `/og-image/${course.slug}/${slug}.jpg`,
  permalink: `/${course.slug}/${slug}`,
})

export async function getAllLessonsByCourseSlug(courseSlug) {
  const course = await getCourseBySlug(courseSlug)

  return (
    await getAllFiles(`courses/${courseSlug}/lessons`, transform(course))
  ).sort((a, b) => a.id - b.id)
}

export function getAllLessonSlugsByCourseSlug(courseSlug) {
  return getSlugs(`courses/${courseSlug}/lessons`)
}

export async function getLessonBySlugs(courseSlug, lessonSlug) {
  const course = await getCourseBySlug(courseSlug)

  return await getFileBySlug(`courses/${courseSlug}/lessons`, lessonSlug, transform(course))
}
