import fs from 'fs'
import path from 'path'
import { parse } from 'svg-parser'

export default function handler(req, res) {
  if (req.method !== 'GET') {
    res.status(404)
    res.end
  }

  const {
    query: {
      name,
      size,
      style,
    },
  } = req

  const isSmall = size === 'small'
  const isSolid = style === 'solid'

  const filePath = path.join(process.cwd(), 'src', 'icons', `${name}${isSmall ? '--small' : ''}${isSolid ? '--solid' : ''}.svg`)


  if (!fs.existsSync(filePath)) {
    console.error({ filePath })
    res.status(404)
    res.end()
    return
  }

  const file = fs.readFileSync(filePath, 'utf8')
  const ast = parse(file)

  const [root] = ast.children
  const [child] = root.children

  res.json({
    path: child.properties.d,
    viewBox: root.properties.viewBox,
  })
  res.end()
}
