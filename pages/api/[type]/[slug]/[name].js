import getStaticFile from '@/lib/get-static-file'

export const config = {
  api: {
    bodyParser: false,
  },
}

export default function handler(req, res) {
  const {
    query: {
      name,
      slug,
      type,
    },
  } = req

  try {
    const {
      contentType,
      file,
    } = getStaticFile({
      name,
      slug,
      type,
    })

    res.setHeader('Content-Type', contentType)
    res.end(file)
  } catch (error) {
    res.status(404)
    res.end(error)
  }
}
