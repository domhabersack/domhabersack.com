import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Taper from '../components/taper'

export default ({ data }) => {
  const {
    frontmatter,
    html
  } = data.markdownRemark

  const { title } = frontmatter

  return (
    <Layout
      breadcrumbs={[
        {
          label: 'Projects',
          url: '/projects'
        }, {
          label: title
        }
      ]}
    >
      <Taper>
        <h1>{title}</h1>

        <div dangerouslySetInnerHTML={{ __html: html }} />
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
      html
      frontmatter {
        title
      }
    }
  }
`
