import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'

export default ({
  description,
  title
}) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const siteTitle = data.site.siteMetadata.title

  return (
    <Helmet>
      {description && (
        <meta name="description" content={description} />
      )}

      {title ? (
        <title>{title} · {siteTitle}</title>
      ) : (
        <title>{siteTitle}</title>
      )}
    </Helmet>
  )
}
