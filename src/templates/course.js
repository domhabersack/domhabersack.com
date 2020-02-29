import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Taper from '../components/taper'

export default ({ data }) => (
  <Layout
    breadcrumbs={[
      {
        label: 'Courses',
        url: '/courses'
      }, {
        label: data.markdownRemark.frontmatter.title
      }
    ]}
  >
    <Taper>
      <h1>
        {data.markdownRemark.frontmatter.title}
      </h1>

      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />

      <h4 className="font-size-16 font-weight-400">
        <span className="color-gray-500">
          #1
        </span>

        VIDEO_TITLE

        <span className="color-gray-500">
          (duration)
        </span>
      </h4>
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
        slug
      }
      html
      frontmatter {
        title
      }
    }
  }
`
