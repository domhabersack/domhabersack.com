import fs from 'fs'

export default function readFile(filePath) {
  return fs.readFileSync(filePath)
}