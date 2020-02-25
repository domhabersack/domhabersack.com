import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import PostTeasers from '../components/post-teasers'
import Taper from '../components/taper'

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
    <Layout
      breadcrumbs={[
        {
          label: 'Categories'
        }
      ]}
    >
      <Taper>
        <h1>Categories</h1>
      </Taper>

      {categories.map(category => (
        <>
          <Taper>
            <h2>
              {category} &times; {postsByCategory[category].length}
            </h2>
          </Taper>

          <PostTeasers posts={postsByCategory[category]} />
        </>
      ))}
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
      }
    ) {
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
