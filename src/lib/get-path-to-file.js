import path from 'path'

export default function getPathToFile(filePath) {
  return path.join(process.cwd(), filePath)
}
