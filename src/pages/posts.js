import React from 'react'

import PostTeaser from '../components/post-teaser'

export default ({ data }) => (
  <>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <PostTeaser key={node.id} post={node} />
    ))}
  </>
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
