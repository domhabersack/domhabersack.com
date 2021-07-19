import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote'
import { Tag } from '@yieldui/react'

import ArticleTeasers from '@/components/article-teasers'
import Figure from '@/components/figure'
import H1 from '@/components/h1'
import Icon from '@/components/icon'
import Layout from '@/components/layout'
import Lessons from '@/components/lessons'
import MDXComponents from '@/components/mdx-components'
import MetaTags from '@/components/meta-tags'
import PostMeta from '@/components/post-meta'
import Stack from '@/components/stack'
import { getAllCourseSlugs, getCourseBySlug } from '@/lib/api/courses'
import { getAllFiretipSlugs, getFiretipBySlug } from '@/lib/api/firetips'
import { getAllArticleSlugs, getArticleBySlug } from '@/lib/api/articles'
import { getAllPageSlugs, getPageBySlug } from '@/lib/api/pages'
import { getAllProjectSlugs, getProjectBySlug } from '@/lib/api/projects'
import getMDXSource from '@/lib/get-mdx-source'
import prettifyUrl from '@/lib/prettify-url'

export default function Page({
  author,
  breadcrumbs,
  createdAt,
  description,
  excerpt,
  hero,
  heroAlt,
  heroCaption,
  lessons,
  mdxSource,
  ogImage,
  ogType,
  permalink,
  related,
  stack,
  tags,
  title,
  url,
}) {
  const hasHero = hero != null
  const hasLessons = lessons != null
  const hasTags = tags != null
  const hasMeta = author != null && createdAt != null
  const hasRelatedArticles = related?.length > 0
  const hasUrl = url != null
  const hasStack = stack != null

  return (
    <Layout breadcrumbs={breadcrumbs}>
      <MetaTags
        description={description ?? excerpt}
        ogImage={ogImage}
        ogType={ogType}
        permalink={permalink}
        publishedAt={createdAt}
        tags={tags}
        title={title}
      />

      <H1>
        {title}
      </H1>

      {hasTags && (
        <div className="flex flex-wrap mb-4 space-x-1.5">
          {tags.map(tag => (
            <Tag key={tag}>
              {tag}
            </Tag>
          ))}
        </div>
      )}

      {hasMeta && (
        <div className="mb-8">
          <PostMeta
            author={author.name}
            avatar={author.avatar}
            createdAt={createdAt}
          />
        </div>
      )}

      {hasHero && (
        <Figure
          alt={heroAlt}
          caption={heroCaption}
          className="m-0 mb-6"
          src={hero}
        />
      )}

      <div className="break-words prose prose-blue dark:prose-dark">
        <MDXRemote {...mdxSource} components={MDXComponents} />
      </div>

      {hasLessons && (
        <Lessons lessons={lessons} />
      )}

      {hasRelatedArticles && (
        <div className="mt-24">
          <h2 className="font-bold mb-4 text-gray-900 text-xl dark:text-gray-50">
            Continue reading
          </h2>

          <div className="max-w-md mb-8">
            <ArticleTeasers articles={related} />
          </div>

          <p>
            <Link href="/writing">
              <a className="text-gray-800 dark:text-gray-100">
                Read all articles &rarr;
              </a>
            </Link>
          </p>
        </div>
      )}

      {hasUrl && (
        <a className="inline-flex font-medium items-center space-x-1.5 text-blue-600 dark:text-blue-500" href={url}>
          <span>
            Visit {prettifyUrl(url)}
          </span>

          <Icon className="w-4 h-4" type="external-link" size="small" />
        </a>
      )}

      {hasStack && (
        <div className="mt-4">
          <Stack stack={stack} />
        </div>
      )}
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const page = (await getPageBySlug(params.slug)) || (await getArticleBySlug(params.slug)) || (await getProjectBySlug(params.slug)) || (await getFiretipBySlug(params.slug)) || await getCourseBySlug(params.slug)

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
  const allCourseSlugs = getAllCourseSlugs()
  const allFiretipSlugs = getAllFiretipSlugs()
  const allPageSlugs = getAllPageSlugs()
  const allArticleSlugs = getAllArticleSlugs()
  const allProjectSlugs = getAllProjectSlugs()

  return {
    fallback: false,
    paths: [
      ...allCourseSlugs,
      ...allFiretipSlugs,
      ...allPageSlugs,
      ...allArticleSlugs,
      ...allProjectSlugs,
    ].map(slug => ({
      params: {
        slug,
      },
    })),
  }
}
