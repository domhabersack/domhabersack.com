import matter from 'gray-matter'

import { getSubDirectories } from '@/lib/api-helpers'
import { getAuthorBySlug } from '@/lib/api/authors'
import { getCategoryByTitle } from '@/lib/api/post-categories'
import getMDXSource from '@/lib/get-mdx-source'

export async function getAllPosts() {
  const directories = getSubDirectories('_posts')

  return (await Promise.all(directories.map(async ({
    name,
  }) => {
    const file = readFile(`_posts/${name}/index.mdx`)

    const [, date, slug] = name.match(/^(\d+-\d+-\d+)-(.*)$/)

    const {
      content,
      data,
    } = matter(file)

    const author = await getAuthorBySlug(data.author)

    const attachments = data.attachments?.reduce((obj, attachment) => {
      const [, attachmentName] = attachment.match(/(.*)\..*$/)

      return ({
        ...obj,
        [attachmentName]: `/api/posts/${name}/attachments/${attachment}`,
      })
    }, {}) ?? null

    const figures = data.figures?.reduce((obj, figure) => {
      const [, figureName] = figure.match(/(.*)\..*$/)

      return ({
        ...obj,
        [figureName]: `/api/posts/${name}/images/${figure}`,
      })
    }, {}) ?? null

    const mdxSource = await getMDXSource(content, {
      attachments,
      figures,
    })

    const categories = await Promise.all(data.categories?.map(async title => await getCategoryByTitle(title)))

    return {
      ...data,
      attachments,
      author,
      categories,
      date,
      figures,
      hero: `/api/posts/${name}/images/hero.jpg`,
      mdxSource,
      permalink: `/posts/${slug}`,
      slug,
    }
  }))).sort((a, b) => new Date(b.date) - new Date(a.date))
}

export async function getLatestPosts({ limit }) {
  const allPosts = await getAllPosts()

  return allPosts.slice(0, limit)
}

export async function getPostBySlug(slug) {
  const allPosts = await getAllPosts()

  return allPosts.find(post => post.slug === slug)
}
