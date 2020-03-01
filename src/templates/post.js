import React from "react"
import { graphql } from "gatsby"

import Layout from '../components/layout'
import MailingListSignup from '../components/mailing-list-signup'
import PostMeta from '../components/post-meta'
import Tag from '../components/tag'
import Taper from '../components/taper'

export default ({ data }) => {
  const {
    fields,
    frontmatter,
    html
  } = data.markdownRemark

  const {
    date,
    slug
  } = fields

  const {
    categories,
    heroAlt,
    heroCaption,
    title
  } = frontmatter

  return (
    <Layout
      breadcrumbs={[
        {
          label: 'Blog',
          url: '/posts'
        }, {
          label: title
        }
      ]}
    >
      <Taper>
        <h1>{title}</h1>

        <div className="l-post__meta">
          <PostMeta date={date} />
        </div>
      </Taper>

      <figure className="l-post__hero">
        <img alt={heroAlt} src={`/assets/heroes/${slug}.jpg`} />

        {heroCaption && (
          <figcaption>
            {heroCaption}
          </figcaption>
        )}
      </figure>

      <Taper>
        <div className="l-post__content" dangerouslySetInnerHTML={{ __html: html }} />

        <div className="l-post__tagged">
          <p className="l-post__tagged-label">
            Tags:
          </p>

          <div className="l-post__tags">
            {categories.map(category => (
              <div className="l-post__tag" key={`category-${category}`}>
                <Tag tag={category} />
              </div>
            ))}
          </div>
        </div>

        <div className="l-post__mailing-list-signup">
          <MailingListSignup />
        </div>
      </Taper>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: {
      slug: {
        eq: $slug
      }
    }) {
      fields {
        date
        slug
      }
      html
      frontmatter {
        categories
        heroAlt
        heroCaption
        title
      }
    }
  }
`
