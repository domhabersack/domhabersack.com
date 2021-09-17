import { renderToStaticMarkup } from 'react-dom/server'

import config from '@/config'
import getAllPermalinks from '@/lib/get-all-permalinks'

const EXCLUDES = [
  '/confirm-subscription',
]

export default function SitemapIndex() {
  return null
}

function Sitemap({
  permalinks,
}) {
  return (
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      {permalinks.map(permalink => (
        <url key={permalink}>
          <loc>
            {config.siteUrl}{permalink}
          </loc>
        </url>
      ))}
    </urlset>
  )
}

export async function getServerSideProps({ res }) {
  const permalinks = await getAllPermalinks()

  const filteredPermalinks = permalinks.filter(permalink => !EXCLUDES.includes(permalink))

  res.setHeader('Content-Type', 'text/xml')
  res.write(renderToStaticMarkup(<Sitemap permalinks={filteredPermalinks} />))
  res.end()

  return {
    props: {},
  }
}
