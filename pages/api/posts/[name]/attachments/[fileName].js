import fs from 'fs'
import path from 'path'

const CONTENT_TYPE_BY_EXTENSION = {
  '.pdf': 'application/pdf',
}

export default function handler(req, res) {
  const {
    query: {
      fileName,
      name,
    },
  } = req

  const filePath = path.join(process.cwd(), '_posts', name, fileName)
  const extension = path.extname(filePath)

  if (['.pdf'].includes(extension)) {
    const file = fs.readFileSync(filePath)

    res.setHeader('Content-Type', CONTENT_TYPE_BY_EXTENSION[extension])
    res.end(file)
  } else {
    res.status(404)
  }
}
