import React from "react"
import { graphql } from "gatsby"

import Layout from '../components/layout'
import PostTeasers from '../components/post-teasers'
import Taper from '../components/taper'

export default ({ data, pageContext }) => (
  <Layout
    breadcrumbs={[
      {
        label: 'Categories',
        url: '/categories'
      }, {
        label: pageContext.category
      }
    ]}
  >
    <Taper>
      <h1>Posts in “{pageContext.category}”</h1>
    </Taper>

    <PostTeasers posts={data.allMarkdownRemark.edges.map(({ node }) => node)} />
  </Layout>
)

export const pageQuery = graphql`
  query($category: [String]) {
    allMarkdownRemark(
      filter: {
        frontmatter: {
          categories: {
            in: $category
          }
        }
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
