import React from 'react'
import { graphql } from 'gatsby'

import CourseTeasers from '../components/course-teasers'
import Layout from '../components/layout'
import Taper from '../components/taper'

export default ({ data }) => (
  <Layout
    breadcrumbs={[
      {
        label: 'Courses'
      }
    ]}
  >
    <Taper>
      <h1>Courses</h1>

      <p>
        If you are a designer or developer and want to level up your skills, there’s a course in here for you. All of them are completely free.
      </p>

      <p>
        I am always working on new content. Sign up to any course or <a href="/newsletter">join my newsletter</a> to catch announcements of new ones.
      </p>
    </Taper>

    <CourseTeasers courses={data.allMarkdownRemark.edges.map(({ node }) => node)} />
  </Layout>
)

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: {
        fields: {
          type: {
            eq: "course"
          }
        }
      },
      sort: {
        fields: fields___slug,
        order: ASC
      }
    ) {
      edges {
        node {
          id
          fields {
            permalink
          }
          frontmatter {
            emails
            excerpt
            hours
            title
            weeks
            videos
          }
        }
      }
    }
  }
`
