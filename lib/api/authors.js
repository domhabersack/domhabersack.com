import { getAllFiles, getFileBySlug } from '@/lib/api-helpers'

const transform = ({
  slug,
}) => {
  return {
    avatar: `/api/authors/${slug}/images/${slug}.jpg`,
  }
}

export async function getAllAuthors() {
  return await getAllFiles('authors', transform)
}

export async function getAuthorBySlug(slug) {
  return await getFileBySlug('authors', slug, transform)
}
