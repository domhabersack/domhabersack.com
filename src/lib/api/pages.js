import { getAllFiles, getFileBySlug, getSlugs } from '@/lib/api-helpers'

const transform = ({
  frontmatter,
  slug,
}) => ({
  breadcrumbs: [
    {
      label: frontmatter.title,
    }
  ],
  permalink: `/${slug}`,
})

export async function getAllPages() {
  return await getAllFiles('pages', transform)
}

export function getAllPageSlugs() {
  return getSlugs('pages')
}

export async function getPageBySlug(slug) {
  return await getFileBySlug('pages', slug, transform)
}
