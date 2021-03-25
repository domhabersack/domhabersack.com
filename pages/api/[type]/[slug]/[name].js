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

  if (!ALLOWED_TYPES.includes(type)) {
    res.status(404)
  }

  const filePath = path.join(process.cwd(), `_${type}`, slug, name)
  const extension = path.extname(filePath)

  if (!ALLOWED_EXTENSIONS.includes(extension)) {
    res.status(404)
  }

  const file = fs.readFileSync(filePath)

  res.setHeader('Content-Type', CONTENT_TYPE_BY_EXTENSION[extension])
  res.end(file)
}
