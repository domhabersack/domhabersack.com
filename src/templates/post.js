import React from "react"
import { graphql } from "gatsby"

import Layout from '../components/layout'
import MailingListSignup from '../components/mailing-list-signup'
import PostMeta from '../components/post-meta'
import Tag from '../components/tag'
import Taper from '../components/taper'

export default ({ data }) => (
  <Layout
    breadcrumbs={[
      {
        label: 'Blog',
        url: '/posts'
      }, {
        label: data.markdownRemark.frontmatter.title
      }
    ]}
  >
    <Taper>
      <h1>{data.markdownRemark.frontmatter.title}</h1>

      <div className="l-post__meta">
        <PostMeta date={data.markdownRemark.fields.date} />
      </div>
    </Taper>

    <figure className="l-post__hero">
      <img alt={data.markdownRemark.frontmatter.heroAlt} src={`/assets/heroes/${data.markdownRemark.fields.slug}.jpg`} />

      {data.markdownRemark.frontmatter.heroCaption && (
        <figcaption>
          {data.markdownRemark.frontmatter.heroCaption}
        </figcaption>
      )}
    </figure>

    <Taper>
      <div className="l-post__content" dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />

      <div className="l-post__tagged">
        <p className="l-post__tagged-label">
          Tags:
        </p>

        <div className="l-post__tags">
          {data.markdownRemark.frontmatter.categories.map(category => (
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
