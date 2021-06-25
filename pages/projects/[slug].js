import { MDXRemote } from 'next-mdx-remote'

import Icon from '@/components/icon'
import Figure from '@/components/figure'
import Layout from '@/components/layout'
import MDXComponents from '@/components/mdx-components'
import MetaTags from '@/components/meta-tags'
import PageTitle from '@/components/page-title'
import Stack from '@/components/stack'
import { getAllProjectSlugs, getProjectBySlug } from '@/lib/api/projects'
import getMDXSource from '@/lib/get-mdx-source'
import prettifyUrl from '@/lib/prettify-url'

export default function Project({
  excerpt,
  hero,
  heroAlt,
  heroCaption,
  mdxSource,
  ogImage,
  permalink,
  stack,
  title,
  url,
}) {
  const breadcrumbs = [
    {
      label: 'Projects',
      url: '/projects'
    }, {
      label: title
    }
  ]

  return (
    <Layout breadcrumbs={breadcrumbs}>
      <MetaTags
        description={excerpt}
        ogImage={ogImage}
        permalink={permalink}
        title={title}
      />

      <PageTitle>
        {title}
      </PageTitle>

      <Figure
        alt={heroAlt}
        caption={heroCaption}
        className="m-0 mb-6"
        src={hero}
      />

      <div className="mb-4 prose prose-blue dark:prose-dark">
        <MDXRemote {...mdxSource} components={MDXComponents} />
      </div>

      <a className="inline-flex font-medium items-center space-x-1.5 text-blue-600 dark:text-blue-500" href={url}>
        <span>
          Visit {prettifyUrl(url)}
        </span>

        <Icon className="w-4 h-4" type="external-link" size="small" />
      </a>

      <div className="mt-4">
        <Stack stack={stack} />
      </div>
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const project = await getProjectBySlug(params.slug)

  const mdxSource = await getMDXSource(project.content, {
    attachments: project.attachments,
    figures: project.figures,
  })

  return {
    props: {
      ...project,
      mdxSource,
    }
  }
}

export function getStaticPaths() {
  const allProjectSlugs = getAllProjectSlugs()

  return {
    fallback: false,
    paths: allProjectSlugs.map(slug => ({
      params: {
        slug,
      },
    })),
  }
}
