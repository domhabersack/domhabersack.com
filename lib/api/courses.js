import matter from 'gray-matter'

import { getSubDirectories, readFile } from '@/lib/api-helpers'
import getMDXSource from '@/lib/get-mdx-source'

export async function getAllCourses() {
  const directories = getSubDirectories('_courses')

  return (await Promise.all(directories.map(async ({
    name,
  }) => {
    const file = readFile(`_courses/${name}/index.mdx`)

    const [, date, slug] = name.match(/^(\d+-\d+-\d+)-(.*)$/)

    const {
      content,
      data,
    } = matter(file)

    const mdxSource = await getMDXSource(content)

    return {
      ...data,
      date,
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
