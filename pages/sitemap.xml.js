import { renderToStaticMarkup } from 'react-dom/server'

import config from '@/config'
import { getAllCourses } from '@/lib/api/courses'
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
  const firetips = (await getAllFiretips()).map(getPermalink)
  const firetipTags = (await getAllFiretipTags()).map(getPermalink)
  const pages = (await getAllPages()).map(getPermalink)
  const posts = (await getAllPosts()).map(getPermalink)
  const postCategories = (await getAllPostCategories()).map(getPermalink)
  const newsletters = (await getAllNewsletters()).map(getPermalink)
  const courses = (await getAllCourses()).map(getPermalink)
  const projects = (await getAllProjects()).map(getPermalink)

  const allPermalinks = [
    ...pages,
    '/',
    '/categories',
    ...postCategories,
    '/contact',
    '/courses',
    ...courses,
    '/firetips',
    ...firetips,
    '/firetips/tags',
    ...firetipTags,
    '/newsletter',
    '/newsletter/archive',
    ...newsletters,
    '/posts',
    ...posts,
    '/projects',
    ...projects,
  ].sort()

  res.setHeader('Content-Type', 'text/xml')
  res.write(renderToStaticMarkup(<Sitemap permalinks={allPermalinks} />))
  res.end()

  return {
    props: {},
  }
}
