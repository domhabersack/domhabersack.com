import { existsSync, readdirSync, readFileSync } from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

export async function getAllFiles(type, transform = () => {}) {
  return getSlugs(type).reduce(async (previousPromise, slug) => {
    const allFiles = await previousPromise

    const file = readFileSync(join(process.cwd(), `_${type}/${slug}/index.mdx`), 'utf8')

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
  const file = readFileSync(join(process.cwd(), `_${type}/${slug}/index.mdx`), 'utf8')

  const {
    content,
    data: frontmatter,
  } = matter(file)

  const attachments = frontmatter.attachments?.reduce((obj, attachment) => {
    const [, attachmentName] = attachment.match(/(.*)\..*$/)

    return ({
      ...obj,
      [attachmentName]: `/api/${type}/${slug}/${attachment}`,
    })
  }, {}) ?? null

  const figures = frontmatter.figures?.reduce((obj, figure) => {
    const [, figureName] = figure.match(/(.*)\..*$/)

    return ({
      ...obj,
      [figureName]: `/api/${type}/${slug}/${figure}`,
    })
  }, {}) ?? null

  const transformed = (await transform({
    frontmatter,
    slug,
  })) ?? {}

  return {
    ...frontmatter,
    ...transformed,
    attachments,
    content,
    figures,
    slug,
  }
}

export function getSlugs(type) {
  return readdirSync(join(process.cwd(), `_${type}`), {
    withFileTypes: true,
  }).filter(dirent => dirent.isDirectory()).map(({ name }) => name).filter(slug => {
    // keep only if directory contains an `index.mdx`
    return existsSync(join(process.cwd(), `_${type}/${slug}/index.mdx`))
  })
}
