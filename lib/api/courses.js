import { getSubDirectories, readMarkdownFile } from '@/lib/api-helpers'
import getMDXSource from '@/lib/get-mdx-source'

export async function getAllCourses() {
  const directories = getSubDirectories('_courses')

  return (await Promise.all(directories.map(async ({
    name: slug,
  }) => {
    const {
      content,
      frontmatter,
    } = readMarkdownFile(`_courses/${slug}/index.mdx`)

    const mdxSource = await getMDXSource(content)

    return {
      ...frontmatter,
      mdxSource,
      permalink: `/projects/${slug}`,
      slug,
    }
  }))).sort((a, b) => new Date(b.date) - new Date(a.date))
}

export async function getCourseBySlug(slug) {
  const allCourses = await getAllCourses()

  return allCourses.find(course => course.slug === slug)
}
