import { MDXRemote } from 'next-mdx-remote'

import Layout from '@/components/layout'
import MDXComponents from '@/components/mdx-components'
import MetaTags from '@/components/meta-tags'
import ArticleTeasers from '@/components/article-teasers'
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

      <h1>
        {title}
      </h1>

      <div className="mb-6">
        <PostMeta
          author={author.name}
          avatar={author.avatar}
          createdAt={createdAt}
        />
      </div>

      <MDXRemote {...mdxSource} components={MDXComponents} />

      {hasRelatedIssues && (
        <div className="mt-24">
          <h2 className="m-0 mb-3 text-xl">
            Continue reading
          </h2>

          <div className="mb-8">
            <ArticleTeasers articles={related} />
          </div>

          <p>
            <a href="/newsletter/archive">
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
