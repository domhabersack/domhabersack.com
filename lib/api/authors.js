import matter from 'gray-matter'

import { getSubDirectories } from '@/lib/api-helpers'

export async function getAllAuthors() {
  const directories = getSubDirectories('_authors')

  return directories.map(({
    name,
  }) => {
    const file = readFile(`_authors/${name}/index.md`)

    const { data } = matter(file)

    return {
      ...data,
      avatar: `/api/authors/${name}/images/${name}.jpg`,
      slug: name,
    }
  })
}

export async function getAuthorBySlug(slug) {
  const allAuthors = await getAllAuthors()

  return allAuthors.find(author => author.slug === slug)
}
