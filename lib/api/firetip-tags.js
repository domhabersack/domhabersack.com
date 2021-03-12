import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

import { getAllFiretips } from '@/lib/api/firetips'
import slugify from '@/lib/slugify'

const FIRETIPS_DIRECTORY_PATH = path.join(process.cwd(), '_firetips')

export async function getAllTags() {
  const files = fs.readdirSync(FIRETIPS_DIRECTORY_PATH).filter(filename => !filename.startsWith('.'))

  const tags = (await Promise.all(files.map(async filename => {
    const file = fs.readFileSync(path.join(FIRETIPS_DIRECTORY_PATH, filename), 'utf-8')

    const { data } = matter(file)

    return data.tags
  }))).flat(1)

  const uniqueTags = [...new Set(tags)]

  return uniqueTags.map(tag => {
    const slug = slugify(tag)

    return {
      permalink: `/firetips/tags/${slug}`,
      slug,
      title: tag,
    }
  }).sort((a, b) => b.slug > a.slug)
}

export async function getAllTagsWithFiretips() {
  const allTags = await getAllTags()
  const allFiretips = await getAllFiretips()

  return allTags.map(tag => {
    const firetips = allFiretips
      .filter(firetip => firetip.tags.map(({ slug }) => slug)
      .includes(tag.slug))

    return {
      ...tag,
      firetips,
    }
  }).sort((a, b) => b.firetips.length - a.firetips.length)
}

export async function getTagByTitle(title) {
  const allTags = await getAllTags()

  return allTags.find(tag => tag.title === title)
}

export async function getTagWithFiretipsBySlug(slug) {
  const allTagsWithFiretips = await getAllTagsWithFiretips()

  return allTagsWithFiretips.find(tag => tag.slug === slug)
}
