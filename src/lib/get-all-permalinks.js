import { getAllArticles } from '@/lib/api/articles'
import { getAllCourses } from '@/lib/api/courses'
import { getAllLessonsByCourseSlug } from '@/lib/api/course-lessons'
import { getAllFiretips } from '@/lib/api/firetips'
import { getAllPages } from '@/lib/api/pages'
import { getAllProjects } from '@/lib/api/projects'

export default async function getAllPermalinks() {
  const articles = await getAllArticles()
  const courses = await getAllCourses()
  const coursesLessons = (await Promise.all(courses.map(({ slug }) => getAllLessonsByCourseSlug(slug)))).flat(1)
  const firetips = await getAllFiretips()
  const pages = await getAllPages()
  const projects = await getAllProjects()

  return [
    '/',
    '/courses',
    '/firetips',
    '/projects',
    '/writing',
    ...[
      ...articles,
      ...courses,
      ...coursesLessons,
      ...firetips,
      ...pages,
      ...projects,
    ].map(({ permalink }) => permalink),
  ].sort()
}
