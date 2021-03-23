import React from 'react'
import Head from 'next/head'

import config from '@/config'

export default function MetaTags({
  description,
  expiredAt,
  heroAlt,
  imageSubpath = 'default',
  permalink,
  publishedAt,
  tags,
  title,
  type,
  updatedAt,
}) {
  const {
    siteUrl,
    title: siteTitle,
  } = config

  const isArticle = type === 'article'

  return (
    <Head>
      {description && (<meta name="description" content={description} />)}

      {title ? (
        <title>{title} · {siteTitle}</title>
      ) : (
        <title>{siteTitle}</title>
      )}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@domhabersack" />

      <meta property="og:image" content={`${siteUrl}/assets/rich-previews/${imageSubpath}.jpg`} />
      <meta property="og:image:height" content="314" />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content="600" />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:title" content={title ?? siteTitle} />
      <meta property="og:url" content={`${siteUrl}${permalink}`} />

      {description && (<meta property="og:description" content={description} />)}
      {heroAlt && (<meta property="og:image:alt" content={heroAlt} />)}
      {type && (<meta property="og:type" content={type} />)}

      {isArticle && (
        <React.Fragment>
          {expiredAt && (<meta property="article:expiration_time" content={expiredAt} />)}
          {publishedAt && (<meta property="article:published_time" content={publishedAt} />)}
          {tags?.map(tag => (<meta property="article:tag" content={tag.title} key={`tag-${tag.slug}`} />))}
          {updatedAt && (<meta property="article:modified_time" content={updatedAt} />)}
        </React.Fragment>
      )}
    </Head>
  )
}
