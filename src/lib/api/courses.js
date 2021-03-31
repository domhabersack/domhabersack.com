import { getAllFiles, getFileBySlug, getSlugs } from '@/lib/api-helpers'
import { getAllLessonsByCourseSlug } from '@/lib/api/course-lessons'

const transform = ({
  slug,
}) => ({
  hero: `/api/courses/${slug}/hero.jpg`,
  ogImage: `/api/courses/${slug}/og-image.jpg`,
  permalink: `/courses/${slug}`,
})

export async function getAllCourses() {
  const courses = await getAllFiles('courses', transform)

  return courses.map(course => {
    const lessonSlugs = getSlugs(`courses/${course.slug}/lessons`)

    return {
      ...course,
      lessons: lessonSlugs,
    }
  }).sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
}

export function getAllCourseSlugs() {
  return getSlugs('courses')
}

export async function getCourseBySlug(slug) {
  const course = await getFileBySlug('courses', slug, transform)

  const lessonSlugs = getSlugs(`courses/${slug}/lessons`)
  const lessons = (await Promise.all(lessonSlugs.map(lessonSlug => getFileBySlug(`courses/${slug}/lessons`, lessonSlug, ({
    slug: lessonSlug,
  }) => ({
    permalink: `/courses/${slug}/${lessonSlug}`,
  }))))).sort((a, b) => a.id - b.id)

  return {
    ...course,
    lessons,
  }
}
