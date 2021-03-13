import { getSubDirectories, readMarkdownFile } from '@/lib/api-helpers'
import { getAuthorBySlug } from '@/lib/api/authors'
import { getCategoryByTitle } from '@/lib/api/post-categories'
import getMDXSource from '@/lib/get-mdx-source'

async function transform({
  content,
  frontmatter,
  slug,
}) {
  const author = await getAuthorBySlug(frontmatter.author)

  const attachments = frontmatter.attachments?.reduce((obj, attachment) => {
    const [, attachmentName] = attachment.match(/(.*)\..*$/)

    return ({
      ...obj,
      [attachmentName]: `/api/posts/${slug}/attachments/${attachment}`,
    })
  }, {}) ?? null

  const figures = frontmatter.figures?.reduce((obj, figure) => {
    const [, figureName] = figure.match(/(.*)\..*$/)

    return ({
      ...obj,
      [figureName]: `/api/posts/${slug}/images/${figure}`,
    })
  }, {}) ?? null

  const mdxSource = await getMDXSource(content, {
    attachments,
    figures,
  })

  const categories = await Promise.all(frontmatter.categories?.map(async title => await getCategoryByTitle(title)))

  return {
    attachments,
    author,
    categories,
    figures,
    hero: `/api/posts/${slug}/images/hero.jpg`,
    mdxSource,
    permalink: `/posts/${slug}`,
  }
}

export async function getAllPosts() {
  const directories = getSubDirectories('_posts')

  return (await Promise.all(directories.map(async slug =>
    await readMarkdownFile(`_posts/${slug}/index.mdx`, slug, transform)
  ))).sort((a, b) => new Date(b.date) - new Date(a.date))
}

export function getAllPostSlugs() {
  return getSubDirectories('_posts')
}

export async function getLatestPosts({ limit }) {
  const allPosts = await getAllPosts()

  return allPosts.slice(0, limit)
}

export async function getPostBySlug(slug) {
  return await readMarkdownFile(`_posts/${slug}/index.mdx`, slug, transform)
}
