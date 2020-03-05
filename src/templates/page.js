import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import MetaTags from '../components/meta-tags'
import Taper from '../components/taper'

export default ({ data }) => {
  const {
    frontmatter,
    html
  } = data.markdownRemark

  const {
    description,
    title
  } = frontmatter

  return (
    <Layout
      breadcrumbs={[
        {
          label: title
        }
      ]}
    >
      <MetaTags
        description={description}
        title={title}
      />

      <Taper>
        <h1>{title}</h1>

        <div dangerouslySetInnerHTML={{ __html: html }} />
      </Taper>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(
      fields: {
        slug: {
          eq: $slug
        }
      }
    ) {
      fields {
        slug
      }
      html
      frontmatter {
        description
        title
      }
    }
  }
`
