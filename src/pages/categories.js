import React from 'react'
import { graphql } from 'gatsby'

import Breakout from '../components/breakout'
import Layout from '../components/layout'
import PostTeasers from '../components/post-teasers'

export default ({ data }) => {
  const categories = [
    ...new Set(data.allMarkdownRemark.edges.map(({ node }) => node.frontmatter.categories).flat())
  ].sort((a, b) => a.toLowerCase() > b.toLowerCase())

  const postsByCategory = categories.reduce((object, category) => {
    return {
      ...object,
      [category]: data.allMarkdownRemark.edges.filter(({ node }) => node.frontmatter.categories.includes(category)).map(({ node }) => node)
    }
  }, {})

  return (
    <Layout>
      <h1>Categories</h1>

      {categories.map(category => (
        <>
          <h2>
            {category} &times; {postsByCategory[category].length}
          </h2>

          <Breakout>
            <PostTeasers posts={postsByCategory[category]} />
          </Breakout>
        </>
      ))}
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          fields {
            date
            permalink
            slug
          }
          frontmatter {
            categories
            excerpt
            heroAlt
            heroCaption
            title
          }
        }
      }
    }
  }
`
