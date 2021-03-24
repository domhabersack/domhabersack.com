import { readFileSync } from 'fs'
import { join, extname } from 'path'

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

export const config = {
  api: {
    bodyParser: false,
  },
}

export default function handler(req, res) {
  const {
    query: {
      name,
      slug,
      type,
    },
  } = req

  console.log(`GET FILE AT ${type}/${slug}/${name}`)
  console.log({ ALLOWED_TYPES, ALLOWED_EXTENSIONS, CONTENT_TYPE_BY_EXTENSION })

  if (!ALLOWED_TYPES.includes(type)) {
    res.status(404)
  }

  const path = join(process.cwd(), `_${type}`, slug, name)

  console.log({ path })

  const extension = extname(path)

  console.log({ extension })

  if (!ALLOWED_EXTENSIONS.includes(extension)) {
    res.status(404)
  }

  console.log('READY TO READ FILE')

  const file = readFileSync(path)

  console.log('READ FILE')

  res.setHeader('Content-Type', CONTENT_TYPE_BY_EXTENSION[extension])
  res.end(file)
}
