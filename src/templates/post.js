import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import MailingListSignup from '../components/mailing-list-signup'
import PostMeta from '../components/post-meta'
import Tag from '../components/tag'
import Taper from '../components/taper'

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

        <div className="margin-bottom-l">
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
        <div className="break-words margin-bottom-xxl" dangerouslySetInnerHTML={{ __html: html }} />

        <div className="flex margin-bottom-xxl">
          <p className="color-gray-700 font-size-12-medium margin-0 margin-bottom-xs margin-right-xxs padding-vertical-xs">
            Tags:
          </p>

          <div className="align-items-center flex flex-wrap">
            {categories.map(category => (
              <div className="margin-bottom-xs margin-right-xxs" key={`category-${category}`}>
                <Tag tag={category} />
              </div>
            ))}
          </div>
        </div>

        <div className="l-post__mailing-list-signup">
          <MailingListSignup sourceUrl={location.href} />
        </div>
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
