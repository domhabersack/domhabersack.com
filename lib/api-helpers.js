import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

export function getFilesInDirectory(directoryName) {
  return fs.readdirSync(path.join(process.cwd(), directoryName)).filter(filename => !filename.startsWith('.'))
}

export function getSubDirectories(directoryName) {
  return fs.readdirSync(path.join(process.cwd(), directoryName), {
    withFileTypes: true,
  }).filter(dirent => dirent.isDirectory())
}

export function readMarkdownFile(filePath) {
  const file = fs.readFileSync(path.join(process.cwd(), filePath), 'utf-8')

  const { content, data } = matter(file)

  return {
    content,
    frontmatter: data,
  }
}
