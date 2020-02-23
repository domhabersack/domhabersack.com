import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

export default ({ data }) => (
  <Layout>
    <h1>{data.markdownRemark.frontmatter.title}</h1>

    <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
  </Layout>
)

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: {
      slug: {
        eq: $slug
      }
    }) {
      fields {
        slug
      }
      html
      frontmatter {
        title
      }
    }
  }
`
