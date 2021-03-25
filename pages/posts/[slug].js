import React from 'react'

import Breakout from '@/components/breakout'
import Figure from '@/components/figure'
import Layout from '@/components/layout'
import MetaTags from '@/components/meta-tags'
import PostMeta from '@/components/post-meta'
import Tag from '@/components/tag'
import { getAllPostSlugs, getPostBySlug } from '@/lib/api/posts'
import getMDXSource from '@/lib/get-mdx-source'
import hydrateMDXSource from '@/lib/hydrate-mdx-source'

export default function Post({
  author,
  categories,
  date,
  excerpt,
  hero,
  heroAlt,
  heroCaption,
  mdxSource,
  permalink,
  slug,
  title,
}) {
  const body = hydrateMDXSource(mdxSource)

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
        imageSubpath={`posts/${slug}`}
        permalink={permalink}
        publishedAt={date}
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
          date={date}
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
        {body}
      </div>

      <div className="flex flex-wrap">
        {categories.map(category => (
          <React.Fragment key={`category-${category.slug}`}>
            <div className="mb-1 mr-1.5">
              <Tag href={category.permalink}>
                {category.title}
              </Tag>
            </div>
          </React.Fragment>
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
