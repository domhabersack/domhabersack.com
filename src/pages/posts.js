import React from 'react'
import { graphql } from 'gatsby'

import Breakout from '../components/breakout'
import PostTeasers from '../components/post-teasers'
import Layout from '../components/layout'

export default ({ data }) => {
  console.log(data.allMarkdownRemark.edges.map(({ node }) => node))

  return (
    <Layout>
      <h1>Blog</h1>

      <Breakout>
        <PostTeasers posts={data.allMarkdownRemark.edges.map(({ node }) => node)} />
      </Breakout>
    </Layout>
  )
}

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
