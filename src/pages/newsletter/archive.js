import React from 'react'

// title: Newsletter archive
// excerpt: Read some of my previous newsletters. Sign up to get them delivered to your inbox.
// navigation_title: Archive

import Layout from '../../components/layout'
import Taper from '../../components/taper'
import formatDate from '../../utils/format-date'
import showEmoji from '../../utils/show-emoji'

export default ({ data }) => (
  <Layout>
    <Taper>
      <h1>Newsletter archive</h1>

      <p>
        These are some of my previous newsletters. <a href="/newsletter">Sign up</a> if you want to get them delivered straight to your inbox.
      </p>

      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div class="margin-bottom-xl">
          <span class="color-gray-600 font-size-12-short">
            {formatDate(node.fields.date)}
          </span>

          <h2 class="font-size-20-medium margin-0">
            <a href={node.fields.permalink}>
              {showEmoji(node.frontmatter.title)}
            </a>
          </h2>
        </div>
      ))}
    </Taper>
  </Layout>
)

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: {
        fields: {
          type: {
            eq: "newsletter"
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
            title
          }
        }
      }
    }
  }
`
