import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import MetaTags from '../components/meta-tags'
import PostTeasers from '../components/post-teasers'
import Taper from '../components/taper'

export default ({ data }) => {
  const posts = data.allMarkdownRemark.edges.map(({ node }) => node)

  const categories = [
    ...new Set(posts.map(({ frontmatter }) => frontmatter.categories).flat())
  ].sort((a, b) => a.toLowerCase() > b.toLowerCase())

  const postsByCategory = categories.reduce((object, category) => ({
    ...object,
    [category]: posts.filter(({ frontmatter }) => frontmatter.categories.includes(category))
  }), {})

  return (
    <Layout
      breadcrumbs={[
        {
          label: 'Categories'
        }
      ]}
    >
      <MetaTags
        title="Categories"
      />

      <Taper>
        <h1>Categories</h1>
      </Taper>

      {categories.map(category => (
        <React.Fragment key={`category-${category}`}>
          <Taper>
            <h2>
              {category} &times; {postsByCategory[category].length}
            </h2>
          </Taper>

          <PostTeasers posts={postsByCategory[category]} />
        </React.Fragment>
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
