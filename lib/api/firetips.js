import { getSubDirectories, readMarkdownFile } from '@/lib/api-helpers'
import { getTagByTitle } from '@/lib/api/firetip-tags'
import getMDXSource from '@/lib/get-mdx-source'

async function transform({
  content,
  frontmatter,
  slug,
}) {
  const mdxSource = await getMDXSource(content)

  const tags = await Promise.all(frontmatter.tags?.map(async title => await getTagByTitle(title)))

  return {
    mdxSource,
    permalink: `/firetips/${slug}`,
    tags,
  }
}

export async function getAllFiretips() {
  const directories = getSubDirectories('_firetips')

  return (await Promise.all(directories.map(async slug => {
    return await readMarkdownFile(`_firetips/${slug}/index.mdx`, slug, transform)
  }))).sort((a, b) => new Date(b.date) - new Date(a.date))
}

export function getAllFiretipSlugs() {
  return getSubDirectories('_firetips')
}

export async function getFiretipBySlug(slug) {
  return await readMarkdownFile(`_firetips/${slug}/index.mdx`, slug, transform)
}
