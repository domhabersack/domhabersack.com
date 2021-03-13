import { getSubDirectories, readMarkdownFile } from '@/lib/api-helpers'

function transform({ slug }) {
  return {
    avatar: `/api/authors/${slug}/images/${slug}.jpg`,
  }
}

export async function getAllAuthors() {
  const directories = getSubDirectories('_authors')

  return directories.map(async slug => {
    return await readMarkdownFile(`_authors/${slug}/index.mdx`, slug, transform)
  })
}

export async function getAuthorBySlug(slug) {
  return await readMarkdownFile(`_authors/${slug}/index.mdx`, slug, transform)
}
