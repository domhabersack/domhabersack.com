import path from 'path'

export default function getExtensionFromPath(filePath) {
  return path.extname(filePath)
}
