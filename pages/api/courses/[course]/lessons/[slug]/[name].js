import fs from 'fs'
import path from 'path'

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
      course,
    },
  } = req

  const filePath = path.join(process.cwd(), `_courses`, course, 'lessons', slug, name)
  const extension = path.extname(filePath)

  const doesFileExist = fs.existsSync(filePath)
  const isExtensionAllowed = ALLOWED_EXTENSIONS.includes(extension)

  if (doesFileExist && isExtensionAllowed) {
    const file = fs.readFileSync(filePath)

    res.setHeader('Content-Type', CONTENT_TYPE_BY_EXTENSION[extension])
    res.end(file)
  } else {
    res.status(404)
    res.end()
  }
}
