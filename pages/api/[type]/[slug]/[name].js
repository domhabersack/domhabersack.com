import getExtensionFromPath from '@/lib/get-extension-from-path'
import getPathToFile from '@/lib/get-path-to-file'
import readFile from '@/lib/read-file'

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

export default async function handler(req, res) {
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

  const filePath = getPathToFile(`_${type}/${slug}/${name}`)
  const extension = getExtensionFromPath(filePath)

  if (!ALLOWED_EXTENSIONS.includes(extension)) {
    res.status(404)
  }

  const file = readFile(filePath)

  res.setHeader('Content-Type', CONTENT_TYPE_BY_EXTENSION[extension])
  res.end(file)
}
