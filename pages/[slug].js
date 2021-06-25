import { MDXRemote } from 'next-mdx-remote'

import Layout from '@/components/layout'
import MDXComponents from '@/components/mdx-components'
import MetaTags from '@/components/meta-tags'
import PageTitle from '@/components/page-title'
import { getAllPageSlugs, getPageBySlug } from '@/lib/api/pages'
import getMDXSource from '@/lib/get-mdx-source'

export default function Page({
  description,
  mdxSource,
  permalink,
  title,
}) {
  const breadcrumbs = [
    {
      label: title
    }
  ]

  return (
    <Layout breadcrumbs={breadcrumbs}>
      <MetaTags
        description={description}
        permalink={permalink}
        title={title}
      />

      <PageTitle>
        {title}
      </PageTitle>

      <div className="break-words prose prose-blue dark:prose-dark">
        <MDXRemote {...mdxSource} components={MDXComponents} />
      </div>
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const page = await getPageBySlug(params.slug)

  const mdxSource = await getMDXSource(page.content, {
    attachments: page.attachments,
    figures: page.figures,
  })

  return {
    props: {
      ...page,
      mdxSource,
    }
  }
}

export function getStaticPaths() {
  const allPageSlugs = getAllPageSlugs()

  return {
    fallback: false,
    paths: allPageSlugs.map(slug => ({
      params: {
        slug,
      },
    })),
  }
}
