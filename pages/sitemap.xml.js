import { renderToStaticMarkup } from 'react-dom/server'

import config from '@/config'
import { getAllCourses } from '@/lib/api/courses'
import { getAllLessonsByCourseSlug } from '@/lib/api/course-lessons'
import { getAllFiretips } from '@/lib/api/firetips'
import { getAllTags as getAllFiretipTags } from '@/lib/api/firetip-tags'
import { getAllNewsletters } from '@/lib/api/newsletters'
import { getAllPages } from '@/lib/api/pages'
import { getAllCategories as getAllPostCategories } from '@/lib/api/post-categories'
import { getAllPosts } from '@/lib/api/posts'
import { getAllProjects } from '@/lib/api/projects'

const getPermalink = page => page.permalink

export default function SitemapIndex() {
  return null
}

function Sitemap({
  permalinks,
}) {
  return (
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      {permalinks.map(permalink => (
        <url key={permalink}>
          <loc>
            {config.siteUrl}{permalink}
          </loc>
        </url>
      ))}
    </urlset>
  )
}

export async function getServerSideProps({ res }) {
  const firetipsPermalinks = (await getAllFiretips()).map(getPermalink)
  const firetipTagsPermalinks = (await getAllFiretipTags()).map(getPermalink)
  const pagesPermalinks = (await getAllPages()).map(getPermalink)
  const postsPermalinks = (await getAllPosts()).map(getPermalink)
  const postCategoriesPermalinks = (await getAllPostCategories()).map(getPermalink)
  const newslettersPermalinks = (await getAllNewsletters()).map(getPermalink)
  const projectsPermalinks = (await getAllProjects()).map(getPermalink)

  const courses = await getAllCourses()
  const coursesPermalinks = courses.map(getPermalink)
  const coursesLessonsPermalinks = (await Promise.all(courses.map(({ slug }) => getAllLessonsByCourseSlug(slug)))).flat(1).map(getPermalink)

  const allPermalinks = [
    '/',
    '/categories',
    '/contact',
    '/courses',
    '/firetips',
    '/firetips/tags',
    '/newsletter',
    '/newsletter/archive',
    '/posts',
    '/projects',

    ...coursesPermalinks,
    ...coursesLessonsPermalinks,
    ...firetipsPermalinks,
    ...firetipTagsPermalinks,
    ...newslettersPermalinks,
    ...pagesPermalinks,
    ...postsPermalinks,
    ...postCategoriesPermalinks,
    ...projectsPermalinks,
  ].sort()

  res.setHeader('Content-Type', 'text/xml')
  res.write(renderToStaticMarkup(<Sitemap permalinks={allPermalinks} />))
  res.end()

  return {
    props: {},
  }
}
