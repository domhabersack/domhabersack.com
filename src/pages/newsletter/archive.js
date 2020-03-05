import React from 'react'
import { graphql } from 'gatsby'

import Emoji from '../../components/emoji'
import Layout from '../../components/layout'
import MetaTags from '../../components/meta-tags'
import Taper from '../../components/taper'
import formatDate from '../../utils/format-date'

export default ({ data }) => {
  const newsletters = data.allMarkdownRemark.edges.map(({ node }) => node)

  return (
    <Layout
      breadcrumbs={[
        {
          label: 'Newsletter',
          url: '/newsletter'
        }, {
          label: 'Archive',
        }
      ]}
    >
      <MetaTags
        description="Read some of my previous newsletters. Sign up to get them delivered to your inbox."
        title="Newsletter archive"
      />

      <Taper>
        <h1>Newsletter archive</h1>

        <p>
          These are some of my previous newsletters. <a href="/newsletter">Sign up</a> if you want to get them delivered straight to your inbox.
        </p>

        {newsletters.map(({
          fields,
          frontmatter,
          id
        }) => {
          const {
            date,
            permalink
          } = fields

          const {
            emoji,
            title
          } = frontmatter

          return (
            <div className="margin-bottom-xl" key={`newsletter-${id}`}>
              <span className="color-gray-600 font-size-12-short">
                {formatDate(date)}
              </span>

              <h2 className="font-size-20-medium margin-0">
                <a href={permalink}>
                  <Emoji name={emoji} />

                  {title}
                </a>
              </h2>
            </div>
          )
        })}
      </Taper>
    </Layout>
  )
}

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
            emoji
            title
          }
        }
      }
    }
  }
`
