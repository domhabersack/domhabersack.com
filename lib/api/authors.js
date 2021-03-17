import { buildGetSlugs, buildReadMarkdownFile } from '@/lib/api-helpers'

const getSlugs = buildGetSlugs('authors')

const readAuthorFile = buildReadMarkdownFile('authors', ({
  slug,
}) => {
  return {
    avatar: `/api/authors/${slug}/images/${slug}.jpg`,
  }
})

export async function getAllAuthors() {
  return (await Promise.all(getSlugs().map(readAuthorFile)))
}

export async function getAuthorBySlug(slug) {
  return await readAuthorFile(slug)
}
