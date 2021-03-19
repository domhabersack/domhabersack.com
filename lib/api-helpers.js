import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

import getMDXSource from '@/lib/get-mdx-source'

export async function getAllFiles(type, transform = () => {}) {
  return getSlugs(type).reduce(async (previousPromise, slug) => {
    const allFiles = await previousPromise

    const file = fs.readFileSync(path.join(process.cwd(), `_${type}/${slug}/index.mdx`), 'utf8')

    const {
      data: frontmatter,
    } = matter(file)

    const transformed = (await transform({
      frontmatter,
      slug,
    })) ?? {}
  
    allFiles.push({
      ...frontmatter,
      ...transformed,
      slug,
    })

    return allFiles
  }, Promise.resolve([]))
}

export async function getFileBySlug(type, slug, transform = () => {}) {
  const file = fs.readFileSync(path.join(process.cwd(), `_${type}/${slug}/index.mdx`), 'utf8')

  const {
    content,
    data: frontmatter,
  } = matter(file)

  const attachments = frontmatter.attachments?.reduce((obj, attachment) => {
    const [, attachmentName] = attachment.match(/(.*)\..*$/)

    return ({
      ...obj,
      [attachmentName]: `/api/${type}/${slug}/attachments/${attachment}`,
    })
  }, {}) ?? null

  const figures = frontmatter.figures?.reduce((obj, figure) => {
    const [, figureName] = figure.match(/(.*)\..*$/)

    return ({
      ...obj,
      [figureName]: `/api/${type}/${slug}/images/${figure}`,
    })
  }, {}) ?? null

  const mdxSource = await getMDXSource(content, {
    attachments,
    figures,
  })

  const transformed = (await transform({
    frontmatter,
    slug,
  })) ?? {}

  return {
    ...frontmatter,
    ...transformed,
    mdxSource,
    slug,
  }
}

export function getSlugs(type) {
  return fs.readdirSync(path.join(process.cwd(), `_${type}`), {
    withFileTypes: true,
  }).filter(dirent => dirent.isDirectory()).map(({ name }) => name)
}
