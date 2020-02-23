import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import MailingListSignup from '../components/mailing-list-signup'
import formatDate from '../utils/format-date'
import showEmoji from '../utils/show-emoji'

export default ({ data }) => (
  <Layout>
    <h1>{showEmoji(data.markdownRemark.frontmatter.title)}</h1>

    <p class="color-gray-500 font-size-12-short margin-bottom-xl">
      {formatDate(data.markdownRemark.fields.date)}
    </p>

    <div class="margin-bottom-xxl" dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />

    <MailingListSignup />
  </Layout>
)

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: {
      slug: {
        eq: $slug
      }
    }) {
      fields {
        date
      }
      html
      frontmatter {
        title
      }
    }
  }
`
