import React from 'react'
import { graphql } from 'gatsby'

import Emoji from '../components/emoji'
import Layout from '../components/layout'
import MailingListSignup from '../components/mailing-list-signup'
import Taper from '../components/taper'
import formatDate from '../utils/format-date'

export default ({ data }) => (
  <Layout
    breadcrumbs={[
      {
        label: 'Newsletter',
        url: '/newsletter'
      }, {
        label: 'Archive',
        url: '/newsletter/archive'
      }, {
        label: data.markdownRemark.frontmatter.title
      }
    ]}
  >
    <Taper>
      <h1>
        <Emoji name={data.markdownRemark.frontmatter.emoji} />

        {data.markdownRemark.frontmatter.title}
      </h1>

      <p className="color-gray-500 font-size-12-short margin-bottom-xl">
        {formatDate(data.markdownRemark.fields.date)}
      </p>

      <div className="margin-bottom-xxl" dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />

      <MailingListSignup />
    </Taper>
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
        emoji
        title
      }
    }
  }
`
