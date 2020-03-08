import React from 'react'
import { graphql } from 'gatsby'

import CourseTeasers from '../components/course-teasers'
import Layout from '../components/layout'
import MetaTags from '../components/meta-tags'
import RichPreview from '../components/rich-preview'
import Taper from '../components/taper'

export default ({ data }) => {
  const courses = data.allMarkdownRemark.edges.map(({ node }) => node)

  return (
    <Layout
      breadcrumbs={[
        {
          label: 'Courses'
        }
      ]}
    >
      <MetaTags
        title="Courses"
      />

      <RichPreview
        permalink="/courses"
        title="Courses"
      />

      <Taper>
        <h1>Courses</h1>

        <p>
          I offer <strong>email- and video-courses</strong> for designers and developers of any skill level. Email-courses land in your inbox over a few weeks, video-courses are binge-ready now. They are all <strong>completely free</strong>.
        </p>

        <p>
          I am always working on new content. Sign up to any course or <a href="/newsletter">join my newsletter</a> to catch announcements of upcoming material. If you want to learn about something in particular, tweet me at <a href="https://twitter.com/domhabersack">@domhabersack</a> and I’ll put it on my list!
        </p>
      </Taper>

      <div className="margin-bottom-xl">
        <CourseTeasers courses={courses} />
      </div>
    </Layout>
  )
}

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
            videos
            weeks
          }
        }
      }
    }
  }
`
