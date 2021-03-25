import fs from 'fs'
import path from 'path'

const ALLOWED_TYPES = [
  'authors',
  'newsletters',
  'pages',
  'posts',
  'projects',
]

const ALLOWED_EXTENSIONS = [
  '.jpg',
  '.pdf',
  '.png',
]

const CONTENT_TYPE_BY_EXTENSION = {
  '.jpg': 'image/jpeg',
  '.pdf': 'application/pdf',
  '.png': 'image/png',
}

export default function getStaticFile({
  name,
  slug,
  type,
}) {
  if (!ALLOWED_TYPES.includes(type)) {
    throw `Type “${type}” not allowed`
  }

  const filePath = path.join(process.cwd(), `_${type}`, slug, name)
  const extension = path.extname(filePath)

  if (!ALLOWED_EXTENSIONS.includes(extension)) {
    throw `Extension “${extension}” not allowed`
  }

  const file = fs.readFileSync(filePath)

  return {
    contentType: CONTENT_TYPE_BY_EXTENSION[extension],
    file,
  }
}
