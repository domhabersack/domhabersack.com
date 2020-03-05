import React from 'react'
import { graphql } from 'gatsby'

import Emoji from '../components/emoji'
import Layout from '../components/layout'
import MailingListSignup from '../components/mailing-list-signup'
import MetaTags from '../components/meta-tags'
import RichPreview from '../components/rich-preview'
import Taper from '../components/taper'
import formatDate from '../utils/format-date'

export default ({
  data,
  location
}) => {
  const {
    fields,
    frontmatter,
    html
  } = data.markdownRemark

  const {
    date,
    permalink
  } = fields

  const {
    emoji,
    excerpt,
    title
  } = frontmatter

  return (
    <Layout
      breadcrumbs={[
        {
          label: 'Newsletter',
          url: '/newsletter'
        }, {
          label: 'Archive',
          url: '/newsletter/archive'
        }, {
          label: title
        }
      ]}
    >
      <MetaTags
        description={excerpt}
        title={title}
      />

      <RichPreview
        description={excerpt}
        permalink={permalink}
        title={title}
      />

      <Taper>
        <h1>
          <Emoji name={emoji} />

          {title}
        </h1>

        <p className="color-gray-500 font-size-12-short margin-bottom-xl">
          {formatDate(date)}
        </p>

        <div className="margin-bottom-xxl" dangerouslySetInnerHTML={{ __html: html }} />

        <MailingListSignup sourceUrl={location.href} />
      </Taper>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(
      fields: {
        slug: {
          eq: $slug
        }
      }
    ) {
      fields {
        date
        permalink
      }
      html
      frontmatter {
        emoji
        excerpt
        title
      }
    }
  }
`
