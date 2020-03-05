import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Helmet } from 'react-helmet'

export default ({
  description,
  expiredAt,
  heroAlt,
  imageUrl = '/assets/rich-previews/islovely.jpg',
  permalink,
  publishedAt,
  tags,
  title,
  type,
  updatedAt
}) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          siteUrl
          title
        }
      }
    }
  `)

  const {
    title: siteTitle,
    siteUrl
  } = data.site.siteMetadata

  const isArticle = type === 'article'

  return (
    <Helmet>
      {description && <meta property="og:description" content={description} />}
      <meta property="og:image" content={`${siteUrl}${imageUrl}`} />
      {heroAlt && <meta property="og:image:alt" content={heroAlt} />}
      <meta property="og:image:height" content="360" />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content="640" />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:title" content={title ? `${title} · ${siteTitle}` : siteTitle} />
      {type && <meta property="og:type" content={type} />}
      {isArticle && expiredAt && <meta property="article:expiration_time" content={expiredAt} />}
      {isArticle && updatedAt && <meta property="article:modified_time" content={updatedAt} />}
      {isArticle && publishedAt && <meta property="article:published_time" content={publishedAt} />}
      {isArticle && tags.map(tag => <meta property="article:tag" content={tag} key={`tag-${tag}`} />)}
      <meta property="og:url" content={`${siteUrl}${permalink}`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@domhabersack" />
    </Helmet>
  )
}
