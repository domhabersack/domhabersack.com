import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

export function getSlugs(type) {
  return fs.readdirSync(path.join(process.cwd(), `_${type}`), {
    withFileTypes: true,
  }).filter(dirent => dirent.isDirectory()).map(({ name }) => name)
}

export async function readMarkdownFile(type, slug, transform = () => {}) {
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
