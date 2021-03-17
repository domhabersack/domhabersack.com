import { buildGetSlugs, buildReadMarkdownFile } from '@/lib/api-helpers'
import getMDXSource from '@/lib/get-mdx-source'

const getSlugs = buildGetSlugs('courses')

const readCourseFile = buildReadMarkdownFile('courses', async ({
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
  return (await Promise.all(getSlugs().map(readCourseFile))).sort((a, b) => new Date(b.date) - new Date(a.date))
}

export function getAllCourseSlugs() {
  return getSlugs()
}

export async function getCourseBySlug(slug) {
  return await readCourseFile(slug)
}
