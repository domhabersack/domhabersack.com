import { getSlugs, readMarkdownFile } from '@/lib/api-helpers'

const readAuthorFile = slug => readMarkdownFile('authors', slug, ({
  slug,
}) => {
  return {
    avatar: `/api/authors/${slug}/images/${slug}.jpg`,
  }
})

export async function getAllAuthors() {
  return (await Promise.all(getSlugs('authors').map(readAuthorFile)))
}

export async function getAuthorBySlug(slug) {
  return await readAuthorFile(slug)
}
