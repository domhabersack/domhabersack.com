import { MDXRemote } from 'next-mdx-remote'
import { Tag } from '@yieldui/react'

import Breakout from '@/components/breakout'
import Figure from '@/components/figure'
import Layout from '@/components/layout'
import MDXComponents from '@/components/mdx-components'
import MetaTags from '@/components/meta-tags'
import PostMeta from '@/components/post-meta'
import { getAllPostSlugs, getPostBySlug } from '@/lib/api/posts'
import getMDXSource from '@/lib/get-mdx-source'

export default function Post({
  author,
  categories,
  createdAt,
  excerpt,
  hero,
  heroAlt,
  heroCaption,
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
        heroAlt={heroAlt}
        ogImage={ogImage}
        permalink={permalink}
        publishedAt={createdAt}
        tags={categories}
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

      <Breakout>
        <Figure
          alt={heroAlt}
          caption={heroCaption}
          className="m-0 mb-6"
          src={hero}
        />
      </Breakout>

      <div className="break-words mb-8">
        <MDXRemote {...mdxSource} components={MDXComponents} />
      </div>

      <div className="flex flex-wrap">
        {categories.map(category => (
          <div className="mb-1 mr-1.5" key={`category-${category.slug}`}>
            <Tag href={category.permalink}>
              {category.title}
            </Tag>
          </div>
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
