import { MDXRemote } from 'next-mdx-remote'
import { Tag } from '@yieldui/react'

import Layout from '@/components/layout'
import MDXComponents from '@/components/mdx-components'
import MetaTags from '@/components/meta-tags'
import PageTitle from '@/components/page-title'
import PostMeta from '@/components/post-meta'
import { getAllPostSlugs, getPostBySlug } from '@/lib/api/posts'
import getMDXSource from '@/lib/get-mdx-source'

export default function Post({
  author,
  tags,
  createdAt,
  excerpt,
  mdxSource,
  ogImage,
  permalink,
  title,
}) {
  const breadcrumbs = [
    {
      label: 'Blog',
      url: '/posts',
    }, {
      label: title,
    },
  ]

  return (
    <Layout breadcrumbs={breadcrumbs}>
      <MetaTags
        description={excerpt}
        ogImage={ogImage}
        permalink={permalink}
        publishedAt={createdAt}
        tags={tags}
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

      <div className="break-words mb-8">
        <MDXRemote {...mdxSource} components={MDXComponents} />
      </div>

      <div className="flex flex-wrap space-x-1.5">
        {tags.map(tag => (
          <Tag key={tag}>
            {tag}
          </Tag>
        ))}
      </div>
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const post = await getPostBySlug(params.slug)

  const mdxSource = await getMDXSource(post.content, {
    attachments: post.attachments,
    figures: post.figures,
  })

  return {
    props: {
      ...post,
      mdxSource,
    }
  }
}

export function getStaticPaths() {
  const allPostSlugs = getAllPostSlugs()

  return {
    fallback: false,
    paths: allPostSlugs.map(slug => ({
      params: {
        slug,
      },
    })),
  }
}
