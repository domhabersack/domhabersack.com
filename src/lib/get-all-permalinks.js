import { getAllArticles } from '@/lib/api/articles'
import { getAllCourses } from '@/lib/api/courses'
import { getAllLessonsByCourseSlug } from '@/lib/api/course-lessons'
import { getAllFiretips } from '@/lib/api/firetips'
import { getAllPages } from '@/lib/api/pages'
import { getAllProjects } from '@/lib/api/projects'

const staticPermalinks = [
  '/',
  '/courses',
  '/firetips',
  '/projects',
  '/writing',
]

const getPermalink = page => page.permalink

export default async function getAllPermalinks() {
  const articlesPermalinks = (await getAllArticles()).map(getPermalink)
  const firetipsPermalinks = (await getAllFiretips()).map(getPermalink)
  const pagesPermalinks = (await getAllPages()).map(getPermalink)
  const projectsPermalinks = (await getAllProjects()).map(getPermalink)

  const courses = await getAllCourses()
  const coursesPermalinks = courses.map(getPermalink)
  const coursesLessonsPermalinks = (await Promise.all(courses.map(({ slug }) => getAllLessonsByCourseSlug(slug)))).flat(1).map(getPermalink)

  return [
    ...staticPermalinks,
    ...articlesPermalinks,
    ...coursesPermalinks,
    ...coursesLessonsPermalinks,
    ...firetipsPermalinks,
    ...pagesPermalinks,
    ...projectsPermalinks,
  ].sort()
}
