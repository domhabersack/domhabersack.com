import React from 'react'

import Firetip from '@/components/firetip'
import Layout from '@/components/layout'
import MetaTags from '@/components/meta-tags'
import RichPreview from '@/components/rich-preview'
import { getAllTagSlugs, getTagWithFiretipsBySlug } from '@/lib/api/firetip-tags'

export default function Tag({
  firetips,
  permalink,
  title,
}) {
  const breadcrumbs = [
    {
      label: 'Fire tips',
      url: '/firetips',
    }, {
      label: 'By tag',
      url: '/firetips/tags',
    }, {
      label: title,
    }
  ]

  return (
    <Layout breadcrumbs={breadcrumbs}>
      <MetaTags title={`Fire tips tagged “${title}”`} />

      <RichPreview
        permalink={permalink}
        title={`Fire tips tagged “${title}”`}
      />

      <h1>
        Fire tips tagged “{title}”
      </h1>

      <div className="grid gap-6">
        {firetips.map(firetip => (
          <React.Fragment key={`firetip-${firetip.slug}`}>
            <Firetip firetip={firetip} />
          </React.Fragment>
        ))}
      </div>
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const tag = await getTagWithFiretipsBySlug(params.slug)

  return {
    props: tag,
  }
}

export async function getStaticPaths() {
  const allTagSlugs = await getAllTagSlugs()

  return {
    fallback: false,
    paths: allTagSlugs.map(slug => ({
      params: {
        slug,
      },
    })),
  }
}
