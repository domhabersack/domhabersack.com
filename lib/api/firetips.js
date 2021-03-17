import { getSlugs, readMarkdownFile } from '@/lib/api-helpers'
import { getTagByTitle } from '@/lib/api/firetip-tags'
import getMDXSource from '@/lib/get-mdx-source'

const readFiretipFile = slug => readMarkdownFile('firetips', slug, async ({
  content,
  frontmatter,
  slug,
}) => {
  const mdxSource = await getMDXSource(content)

  const tags = await Promise.all(frontmatter.tags?.map(async title => await getTagByTitle(title)))

  return {
    mdxSource,
    permalink: `/firetips/${slug}`,
    tags,
  }
})

export async function getAllFiretips() {
  return (
    await Promise.all(getSlugs('firetips').map(readFiretipFile))
  ).sort((a, b) => new Date(b.date) - new Date(a.date))
}

export function getAllFiretipSlugs() {
  return getSlugs('firetips')
}

export async function getFiretipBySlug(slug) {
  return await readFiretipFile(slug)
}
