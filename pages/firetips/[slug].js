import { Tag } from '@yieldui/react'

import Layout from '@/components/layout'
import MetaTags from '@/components/meta-tags'
import { getAllFiretipSlugs, getFiretipBySlug } from '@/lib/api/firetips'
import getMDXSource from '@/lib/get-mdx-source'
import hydrateMDXSource from '@/lib/hydrate-mdx-source'

export default function Firetip({
  mdxSource,
  permalink,
  tags,
  title,
}) {
  const body = hydrateMDXSource(mdxSource)

  const breadcrumbs = [
    {
      label: 'Fire tips',
      url: '/firetips',
    }, {
      label: title,
    },
  ]

  return (
    <Layout breadcrumbs={breadcrumbs}>
      <MetaTags
        imageSubpath="firetips"
        permalink={permalink}
        title={title}
      />

      <h1>
        {title}
      </h1>

      {body}

      <div className="flex flex-wrap">
        {tags.map(tag => (
          <div className="mb-3 mr-2.5" key={`tag-${tag.slug}`}>
            <Tag href={tag.permalink}>
              {tag.title}
            </Tag>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const firetip = await getFiretipBySlug(params.slug)

  const mdxSource = await getMDXSource(firetip.content, {
    attachments: firetip.attachments,
    figures: firetip.figures,
  })

  return {
    props: {
      ...firetip,
      mdxSource,
    }
  }
}

export function getStaticPaths() {
  const allFiretipSlugs = getAllFiretipSlugs()

  return {
    fallback: false,
    paths: allFiretipSlugs.map(slug => ({
      params: {
        slug,
      },
    })),
  }
}
