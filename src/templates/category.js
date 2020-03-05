import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import MetaTags from '../components/meta-tags'
import PostTeasers from '../components/post-teasers'
import RichPreview from '../components/rich-preview'
import Taper from '../components/taper'
import slugify from '../utils/slugify'

export default ({
  data,
  pageContext
}) => {
  const posts = data.allMarkdownRemark.edges.map(({ node }) => node)
  const { category } = pageContext

  return (
    <Layout
      breadcrumbs={[
        {
          label: 'Categories',
          url: '/categories'
        }, {
          label: category
        }
      ]}
    >
      <MetaTags
        title={`Posts in “${category}”`}
      />

      <RichPreview
        permalink={`/categories/${slugify(category)}`}
        title={`Posts in “${category}”`}
      />

      <Taper>
        <h1>Posts in “{category}”</h1>
      </Taper>

      <PostTeasers posts={posts} />
    </Layout>
  )
}

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
