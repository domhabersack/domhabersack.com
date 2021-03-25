import { existsSync, readFileSync } from 'fs'
import { extname, join } from 'path'

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
  const filePath = join(process.cwd(), `_${type}`, slug, name)
  const extension = extname(filePath)
  const contentType = CONTENT_TYPE_BY_EXTENSION[extension]

  const isTypeAllowed = ALLOWED_TYPES.includes(type)
  const doesFileExist = existsSync(filePath)
  const isExtensionAllowed = ALLOWED_EXTENSIONS.includes(extension)

  if (!doesFileExist) {
    throw `File does not exist`
  }

  if (!isTypeAllowed) {
    throw `Type “${type}” not allowed`
  }

  if (!isExtensionAllowed) {
    throw `Extension “${extension}” not allowed`
  }

  const file = readFileSync(filePath)

  return {
    contentType,
    file,
  }
}
