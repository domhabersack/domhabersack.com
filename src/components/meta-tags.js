import Head from 'next/head'

import config from '@/config'

export default function MetaTags({
  description,
  expiredAt,
  ogImage,
  ogType,
  permalink,
  publishedAt,
  tags,
  title,
  updatedAt,
}) {
  const {
    siteUrl,
    title: siteTitle,
  } = config

  const isArticle = ogType === 'article'

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

      {ogImage ? (
        <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      ) : (
        <meta property="og:image" content={`${siteUrl}/og-image/default.jpg`} />
      )}
      <meta property="og:image:height" content="314" />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content="600" />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:title" content={title ?? siteTitle} />
      <meta property="og:url" content={`${siteUrl}${permalink}`} />

      {description && (<meta property="og:description" content={description} />)}
      {ogType && (<meta property="og:type" content={ogType} />)}

      {isArticle && (
        <>
          {expiredAt && (<meta property="article:expiration_time" content={expiredAt} />)}
          {publishedAt && (<meta property="article:published_time" content={publishedAt} />)}
          {tags?.map(tag => (<meta property="article:tag" content={tag} key={tag.slug} />))}
          {updatedAt && (<meta property="article:modified_time" content={updatedAt} />)}
        </>
      )}
    </Head>
  )
}
