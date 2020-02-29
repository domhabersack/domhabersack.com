import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Taper from '../components/taper'

export default ({ data }) => (
  <Layout
    breadcrumbs={[
      {
        label: 'Projects',
        url: '/projects'
      }, {
        label: data.markdownRemark.frontmatter.title
      }
    ]}
  >
    <Taper>
      <h1>{data.markdownRemark.frontmatter.title}</h1>

      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
    </Taper>
  </Layout>
)

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: {
      slug: {
        eq: $slug
      }
    }) {
      html
      frontmatter {
        title
      }
    }
  }
`
