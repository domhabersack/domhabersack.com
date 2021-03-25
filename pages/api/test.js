import fs from 'fs'
import path from 'path'

export default function handler(req, res) {
  const files = fs.readdirSync(path.join(process.cwd()))

  res.json({
    files,
  })
}
