import { getSubDirectories, readMarkdownFile } from '@/lib/api-helpers'

export async function getAllAuthors() {
  const directories = getSubDirectories('_authors')

  return directories.map(slug => {
    const { frontmatter } = readMarkdownFile(`_authors/${slug}/index.mdx`)

    return {
      ...frontmatter,
      avatar: `/api/authors/${slug}/images/${slug}.jpg`,
      slug,
    }
  })
}

export async function getAuthorBySlug(slug) {
  const allAuthors = await getAllAuthors()

  return allAuthors.find(author => author.slug === slug)
}
