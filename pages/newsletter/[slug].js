import { MDXRemote } from 'next-mdx-remote'

import ArticleTeasers from '@/components/article-teasers'
import Layout from '@/components/layout'
import MDXComponents from '@/components/mdx-components'
import MetaTags from '@/components/meta-tags'
import PageTitle from '@/components/page-title'
import PostMeta from '@/components/post-meta'
import { getAllNewsletterSlugs, getNewsletterBySlug } from '@/lib/api/newsletters'
import getMDXSource from '@/lib/get-mdx-source'

export default function Newsletter({
  author,
  createdAt,
  excerpt,
  mdxSource,
  ogImage,
  permalink,
  related,
  title,
}) {
  const breadcrumbs = [
    {
      label: 'Newsletter',
      url: '/newsletter',
    }, {
      label: title,
    },
  ]

  const hasRelatedIssues = related?.length > 0

  return (
    <Layout breadcrumbs={breadcrumbs}>
      <MetaTags
        description={excerpt}
        ogImage={ogImage}
        permalink={permalink}
        publishedAt={createdAt}
        title={title}
        type="article"
      />

      <PageTitle>
        {title}
      </PageTitle>

      <div className="mb-6">
        <PostMeta
          author={author.name}
          avatar={author.avatar}
          createdAt={createdAt}
        />
      </div>

      <div className="break-words prose prose-blue dark:prose-dark">
        <MDXRemote {...mdxSource} components={MDXComponents} />
      </div>

      {hasRelatedIssues && (
        <div className="mt-24">
          <h2 className="font-bold mb-4 text-gray-900 text-xl dark:text-gray-50">
            Continue reading
          </h2>

          <div className="mb-8">
            <ArticleTeasers articles={related} />
          </div>

          <p>
            <a className="text-gray-800 dark:text-gray-100" href="/newsletter/archive">
              Read all issues &rarr;
            </a>
          </p>
        </div>
      )}
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const newsletter = await getNewsletterBySlug(params.slug)

  const mdxSource = await getMDXSource(newsletter.content, {
    attachments: newsletter.attachments,
    figures: newsletter.figures,
  })

  return {
    props: {
      ...newsletter,
      mdxSource,
    }
  }
}

export function getStaticPaths() {
  const allNewsletterSlugs = getAllNewsletterSlugs()

  return {
    fallback: false,
    paths: allNewsletterSlugs.map(slug => ({
      params: {
        slug,
      },
    })),
  }
}
