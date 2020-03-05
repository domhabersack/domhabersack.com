import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import MailingListSignup from '../components/mailing-list-signup'
import MetaTags from '../components/meta-tags'
import PostMeta from '../components/post-meta'
import RichPreview from '../components/rich-preview'
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
    slug,
    permalink
  } = fields

  const {
    categories,
    excerpt,
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
      <MetaTags
        description={excerpt}
        title={title}
      />

      <RichPreview
        description={excerpt}
        heroAlt={heroAlt}
        imageUrl={`/assets/rich-reviews/${slug}.jpg`}
        permalink={permalink}
        publishedAt={date}
        tags={categories}
        title={title}
        type="article"
      />

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
        permalink
        slug
      }
      html
      frontmatter {
        categories
        excerpt
        heroAlt
        heroCaption
        title
      }
    }
  }
`
