import { existsSync, readFileSync } from 'fs'
import path from 'path'

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
  const filePath = path.join(process.cwd(), `_${type}`, slug, name)
  const extension = path.extname(filePath)
  const contentType = CONTENT_TYPE_BY_EXTENSION[extension]

  // const doesFileExist = existsSync(filePath)
  //
  // if (!doesFileExist) {
  //   throw `File does not exist`
  // }

  const file = readFileSync(filePath)

  return {
    contentType,
    file,
  }
}
