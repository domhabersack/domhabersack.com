import React from "react"
import { graphql } from "gatsby"

import Layout from '../components/layout'
import MailingListSignup from '../components/mailing-list-signup'
import PostMeta from '../components/post-meta'
import Tag from '../components/tag'
import Taper from '../components/taper'

export default ({ data }) => (
  <Layout>
    <Taper>
      <h1>{data.markdownRemark.frontmatter.title}</h1>

      <div class="l-post__meta">
        <PostMeta date={data.markdownRemark.fields.date} />
      </div>
    </Taper>

    <figure class="l-post__hero">
      <img alt={data.markdownRemark.frontmatter.heroAlt} src={`/assets/heroes/${data.markdownRemark.fields.slug}.jpg`} />

      {data.markdownRemark.frontmatter.heroCaption && (
        <figcaption>
          {data.markdownRemark.frontmatter.heroCaption}
        </figcaption>
      )}
    </figure>

    <Taper>
      <div class="l-post__content" dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />

      <div class="l-post__tagged">
        <p class="l-post__tagged-label">
          Tags:
        </p>

        <div class="l-post__tags">
          {data.markdownRemark.frontmatter.categories.map(category => (
            <div class="l-post__tag">
              <Tag tag={category} />
            </div>
          ))}
        </div>
      </div>

      <div class="l-post__mailing-list-signup">
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
