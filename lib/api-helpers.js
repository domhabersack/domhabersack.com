import fs from 'fs'
import path from 'path'

export function getSubDirectories(directoryName) {
  return fs.readdirSync(path.join(process.cwd(), directoryName), {
    withFileTypes: true,
  }).filter(dirent => dirent.isDirectory())
}

export function readFile(path) {
  return fs.readFileSync(path.join(process.cwd(), path), 'utf-8')
}