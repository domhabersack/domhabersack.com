import { buildGetSlugs, buildReadMarkdownFile } from '@/lib/api-helpers'
import { getAllFiretips } from '@/lib/api/firetips'
import slugify from '@/lib/slugify'

const getSlugs = buildGetSlugs('firetips')

const readFiretipFile = buildReadMarkdownFile('firetips')

export async function getAllTags() {
  const tags = (await Promise.all(getSlugs().map(async slug => {
    const { tags } = await readFiretipFile(slug)

    return tags
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

export async function getAllTagSlugs() {
  const allTags = await getAllTags()

  return allTags.map(({ slug }) => slug)
}

export async function getTagByTitle(title) {
  const allTags = await getAllTags()

  return allTags.find(tag => tag.title === title)
}

export async function getTagWithFiretipsBySlug(slug) {
  const allTagsWithFiretips = await getAllTagsWithFiretips()

  return allTagsWithFiretips.find(tag => tag.slug === slug)
}
