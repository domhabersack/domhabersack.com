import fs from 'fs'
import path from 'path'

import getAllPermalinks from '@/lib/get-all-permalinks'
import partition from '@/lib/partition'

const hasOgImage = permalink => {
  return fs.existsSync(path.join(__dirname, 'public', 'og-image', `${permalink}.png`))
}

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const permalinks = await getAllPermalinks()

    const [ok, missing] = partition(permalinks, hasOgImage)

    res.json({
      ok,
      missing,
    })
  }
}
