import { getFilesInDirectory } from '@/lib/api-helpers'
import { getTagByTitle } from '@/lib/api/firetip-tags'
import getMDXSource from '@/lib/get-mdx-source'

export async function getAllFiretips() {
  const files = getFilesInDirectory('_firetips')

  return (await Promise.all(files.map(async filename => {
    const {
      content,
      frontmatter,
    } = readMarkdownFile(`_firetips/${filename}`)

    const mdxSource = await getMDXSource(content)

    const tags = await Promise.all(frontmatter.tags?.map(async title => await getTagByTitle(title)))

    return {
      ...frontmatter,
      mdxSource,
      permalink: `/firetips/${slug}`,
      slug: filename,
      tags,
    }
  }))).sort((a, b) => new Date(b.date) - new Date(a.date))
}

export async function getFiretipBySlug(slug) {
  const allFiretips = await getAllFiretips()

  return allFiretips.find(firetip => firetip.slug === slug)
}
