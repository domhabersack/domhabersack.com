import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

import getMDXSource from '@/lib/get-mdx-source'

const COURSES_DIRECTORY_PATH = path.join(process.cwd(), '_courses')

export async function getAllCourses() {
  const directories = fs.readdirSync(COURSES_DIRECTORY_PATH, {
    withFileTypes: true
  }).filter(dirent => dirent.isDirectory())

  return (await Promise.all(directories.map(async ({
    name,
  }) => {
    const [, date, slug] = name.match(/^(\d+-\d+-\d+)-(.*)$/)

    const file = fs.readFileSync(path.join(COURSES_DIRECTORY_PATH, name, 'index.mdx'), 'utf-8')

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
