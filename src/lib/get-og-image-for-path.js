import fs from 'fs'
import path from 'path'

export default function getOgImageForPath(thePath) {
  const hasOgImage = fs.existsSync(path.join(__dirname, 'public', 'og-image', `${thePath}.png`))

  return `/og-image/${hasOgImage ? thePath : 'default'}.png`
}
