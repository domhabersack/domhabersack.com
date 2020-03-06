import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../../components/layout'
import MetaTags from '../../components/meta-tags'
import NewsletterTeaser from '../../components/newsletter-teaser'
import RichPreview from '../../components/rich-preview'
import Taper from '../../components/taper'

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

      <RichPreview
        description="Read some of my previous newsletters. Sign up to get them delivered to your inbox."
        permalink="/newsletter/archive"
        title="Newsletter archive"
      />

      <Taper>
        <h1>Newsletter archive</h1>

        <p>
          These are some of my previous newsletters. <a href="/newsletter">Sign up</a> if you want to get them delivered straight to your inbox.
        </p>

        {newsletters.map(newsletter => (
          <div className="margin-bottom-xl" key={`newsletter-${newsletter.id}`}>
            <NewsletterTeaser newsletter={newsletter} />
          </div>
        ))}
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
