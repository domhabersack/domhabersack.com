import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

export function buildGetSlugs(type) {
  return function () {
    return fs.readdirSync(path.join(process.cwd(), `_${type}`), {
      withFileTypes: true,
    }).filter(dirent => dirent.isDirectory()).map(({ name }) => name)
  }
}

// TODO remove this in favor of `buildGetSlugs`
// export function getSubDirectories(directoryName) {
//   return fs.readdirSync(path.join(process.cwd(), directoryName), {
//     withFileTypes: true,
//   }).filter(dirent => dirent.isDirectory()).map(({ name }) => name)
// }

export function buildReadMarkdownFile(type, transform = () => {}) {
  return async function (slug) {
    const file = fs.readFileSync(path.join(process.cwd(), `_${type}/${slug}/index.mdx`), 'utf-8')

    const {
      content,
      data: frontmatter,
    } = matter(file)

    const transformed = await transform({
      content,
      frontmatter,
      slug,
    })

    return {
      ...frontmatter,
      ...transformed,
      slug,
    }
  }
}

// TODO remove this in favor of `buildReadMarkdownFile`
// export async function readMarkdownFile(filePath, slug, transform) {
//   const file = fs.readFileSync(path.join(process.cwd(), filePath), 'utf-8')
//
//   const {
//     content,
//     data: frontmatter,
//   } = matter(file)
//
//   const transformed = await transform({
//     content,
//     frontmatter,
//     slug,
//   })
//
//   return {
//     ...frontmatter,
//     ...transformed,
//     slug,
//   }
// }

// export function buildHelpers(type, transform) {
//   return {
//     getSlugs: buildGetSlugs(type),
//     readMarkdownFile: buildReadMarkdownFile(type, transform),
//   }
// }
