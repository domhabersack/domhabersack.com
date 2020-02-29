import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Taper from '../components/taper'

export default ({ data }) => (
  <Layout
    breadcrumbs={[
      {
        label: 'Projects'
      }
    ]}
  >
    <Taper>
      <h1>Projects</h1>

      {data.allMarkdownRemark.edges.map(({ node }) => (
        <React.Fragment key={`project-${node.id}`} >
          <h2>
            <a href={node.fields.permalink}>
              {node.frontmatter.title}
            </a>
          </h2>

          <p>
            {node.frontmatter.excerpt}
          </p>
        </React.Fragment>
      ))}
    </Taper>
  </Layout>
)

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
