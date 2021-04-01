import { getAllFiles } from '@/lib/api-helpers'
import { getAllPosts } from '@/lib/api/posts'
import slugify from '@/lib/slugify'

export async function getAllCategories() {
  const categories = (await getAllFiles('posts')).map(({ categories }) => categories).flat(1)

  const uniqueCategories = [...new Set(categories)]

  return uniqueCategories.map(category => {
    const slug = slugify(category)

    return {
      permalink: `/posts/categories/${slug}`,
      slug,
      title: category,
    }
  }).sort((a, b) => b.slug > a.slug)
}

export async function getAllCategoriesWithPosts() {
  const allCategories = await getAllCategories()
  const allPosts = await getAllPosts()

  return allCategories.map(category => {
    const posts = allPosts
      .filter(post => post.categories.map(({ slug }) => slug)
      .includes(category.slug))

    return {
      ...category,
      posts,
    }
  })
}

export async function getAllCategorySlugs() {
  const allCategories = await getAllCategories()

  return allCategories.map(({ slug }) => slug)
}

export async function getCategoryByTitle(title) {
  const allCategories = await getAllCategories()

  return allCategories.find(category => category.title === title)
}

export async function getCategoryWithPostsBySlug(slug) {
  const allCategoriesWithPosts = await getAllCategoriesWithPosts()

  return allCategoriesWithPosts.find(category => category.slug === slug)
}
