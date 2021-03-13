import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

export function getSubDirectories(directoryName) {
  return fs.readdirSync(path.join(process.cwd(), directoryName), {
    withFileTypes: true,
  }).filter(dirent => dirent.isDirectory()).map(({ name }) => name)
}

export async function readMarkdownFile(filePath, slug, transform = () => {}) {
  const file = fs.readFileSync(path.join(process.cwd(), filePath), 'utf-8')

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
