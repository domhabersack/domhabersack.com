import { MDXRemote } from 'next-mdx-remote'
import { Tag } from '@yieldui/react'

import Layout from '@/components/layout'
import MDXComponents from '@/components/mdx-components'
import MetaTags from '@/components/meta-tags'
import PageTitle from '@/components/page-title'
import { getAllFiretipSlugs, getFiretipBySlug } from '@/lib/api/firetips'
import getMDXSource from '@/lib/get-mdx-source'

export default function Firetip({
  mdxSource,
  permalink,
  tags,
  title,
}) {
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

      <PageTitle>
        {title}
      </PageTitle>

      <div className="break-words prose prose-blue dark:prose-dark">
        <MDXRemote {...mdxSource} components={MDXComponents} />
      </div>

      <div className="flex flex-wrap">
        {tags.map(tag => (
          <div className="mb-3 mr-2.5" key={tag.slug}>
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
