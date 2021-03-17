import { getSlugs, readMarkdownFile } from '@/lib/api-helpers'

const transform = ({
  slug,
}) => {
  return {
    avatar: `/api/authors/${slug}/images/${slug}.jpg`,
  }
}

export async function getAllAuthors() {
  return (await Promise.all(getSlugs('authors').map(getAuthorBySlug)))
}

export async function getAuthorBySlug(slug) {
  return await readMarkdownFile('authors', slug, transform)
}
