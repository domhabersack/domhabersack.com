/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require(`path`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: {
          fields: [frontmatter___date],
          order: DESC
        }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    actions.createPage({
      component: path.resolve(`src/templates/post.js`),
      context: {
        slug: node.fields.slug
      },
      path: `/posts/${node.fields.slug}`
    })
  })
}

exports.onCreateNode = ({ actions, getNode, node }) => {
  const parent = getNode(node.parent)

  if (parent && parent.sourceInstanceName === 'posts') {
    const slug = parent.name.match(/^\d{4}-\d{2}-\d{2}-(.*)/)[1]

    actions.createNodeField({
      node,
      name: `slug`,
      value: slug
    })

    actions.createNodeField({
      node,
      name: `hero`,
      value: `/assets/hero.jpg`
    })
  }
}
