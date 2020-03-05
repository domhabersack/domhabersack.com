import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Taper from '../components/taper'

export default ({ data }) => {
  const projects = data.allMarkdownRemark.edges.map(({ node }) => node)

  return (
    <Layout
      breadcrumbs={[
        {
          label: 'Projects'
        }
      ]}
    >
      <Taper>
        <h1>Projects</h1>

        {projects.map(({
          fields,
          frontmatter,
          id
        }) => {
          const { permalink } = fields

          const {
            excerpt,
            title
          } = frontmatter

          return (
            <React.Fragment key={`project-${id}`} >
              <h2>
                <a href={permalink}>
                  {title}
                </a>
              </h2>

              <p>
                {excerpt}
              </p>
            </React.Fragment>
          )
        })}
      </Taper>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: {
        fields: {
          type: {
            eq: "project"
          }
        }
      },
      sort: {
        fields: fields___date,
        order: DESC
      }
    ) {
      edges {
        node {
          id
          fields {
            permalink
            slug
          }
          frontmatter {
            excerpt
            title
          }
        }
      }
    }
  }
`
