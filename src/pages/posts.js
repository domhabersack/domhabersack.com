import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import PostTeasers from '../components/post-teasers'
import Taper from '../components/taper'

export default ({ data }) => (
  <Layout
    breadcrumbs={[
      {
        label: 'Blog'
      }
    ]}
  >
    <Taper>
      <h1>Blog</h1>
    </Taper>

    <PostTeasers posts={data.allMarkdownRemark.edges.map(({ node }) => node)} />
  </Layout>
)

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: {
        fields: {
          type: {
            eq: "post"
          }
        }
      },
      sort: {
        fields: fields___date,
        order: DESC
      }
    ) {
      edges {
        node {
          id
          fields {
            date
            permalink
            slug
          }
          frontmatter {
            categories
            excerpt
            title
          }
        }
      }
    }
  }
`
