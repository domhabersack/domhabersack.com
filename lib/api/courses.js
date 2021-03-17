import { getSlugs, readMarkdownFile } from '@/lib/api-helpers'
import getMDXSource from '@/lib/get-mdx-source'

const readCourseFile = slug => readMarkdownFile('courses', slug, async ({
  content,
  slug,
}) => {
  const mdxSource = await getMDXSource(content)

  return {
    mdxSource,
    permalink: `/courses/${slug}`,
  }
})

export async function getAllCourses() {
  return (
    await Promise.all(getSlugs('courses').map(readCourseFile))
  ).sort((a, b) => new Date(b.date) - new Date(a.date))
}

export function getAllCourseSlugs() {
  return getSlugs('courses')
}

export async function getCourseBySlug(slug) {
  return await readCourseFile(slug)
}
