import { getSubDirectories, readMarkdownFile } from '@/lib/api-helpers'
import getMDXSource from '@/lib/get-mdx-source'

async function transform({ content, slug }) {
  const mdxSource = await getMDXSource(content)

  return {
    mdxSource,
    permalink: `/courses/${slug}`,
  }
}

export async function getAllCourses() {
  const directories = getSubDirectories('_courses')

  return (await Promise.all(directories.map(async slug => {
    return await readMarkdownFile(`_courses/${slug}/index.mdx`, slug, transform)
  }))).sort((a, b) => new Date(b.date) - new Date(a.date))
}

export function getAllCourseSlugs() {
  return getSubDirectories('_courses')
}

export async function getCourseBySlug(slug) {
  return await readMarkdownFile(`_courses/${slug}/index.mdx`, slug, transform)
}
