import { Tag } from '@yieldui/react'

import FiretipTeaser from '@/components/firetip-teaser'
import Layout from '@/components/layout'
import MetaTags from '@/components/meta-tags'
import { getAllFiretips } from '@/lib/api/firetips'
import { getAllTagsWithFiretips } from '@/lib/api/firetip-tags'

export default function Firetips({
  firetips,
  tags,
}) {
  const breadcrumbs = [
    {
      label: 'Fire tips',
    },
  ]

  return (
    <Layout breadcrumbs={breadcrumbs}>
      <MetaTags
        description="Snack-sized snippets that help you write better HTML, CSS, and JavaScript."
        imageSubpath="pages/firetips"
        permalink="/firetips"
        title="Fire tips"
      />

      <h1>
        Fire tips
      </h1>

      <div className="flex flex-wrap mb-6">
        {tags.map(tag => (
          <div className="flex items-center mb-1.5 mr-2.5" key={`tag-${tag.slug}`}>
            <Tag href={tag.permalink}>
              {tag.title}
            </Tag>&nbsp;<span className="text-gray-500 text-xs dark:text-gray-400">&times; {tag.firetips.length}</span>
          </div>
        ))}
      </div>

      <div className="grid gap-6">
        {firetips.map(firetip => (
          <FiretipTeaser firetip={firetip} key={`firetip-${firetip.slug}`} />
        ))}
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const firetips = await getAllFiretips()
  const tags = await getAllTagsWithFiretips()

  return {
    props: {
      firetips,
      tags,
    },
  }
}
