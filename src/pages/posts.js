import React from 'react'
import { graphql } from 'gatsby'

import Breakout from '../components/breakout'
import PostTeaser from '../components/post-teaser'
import Layout from '../components/layout'

export default ({ data }) => (
  <Layout>
    <h1>Blog</h1>

    <Breakout>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <PostTeaser key={node.id} post={node} />
      ))}
    </Breakout>
  </Layout>
)

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: {
      fields: [frontmatter___date],
      order: DESC
    }) {
      edges {
        node {
          id
          fields {
            permalink
          }
          frontmatter {
            categories
            date
            excerpt
            title
          }
        }
      }
    }
  }
`
