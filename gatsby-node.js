/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require(`path`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  const newsletters = await graphql(`
    {
      allFile(filter: {
        sourceInstanceName: {
          eq: "newsletters"
        }
      }) {
        edges {
          node {
            childMarkdownRemark {
              fields {
                permalink
                slug
              }
            }
          }
        }
      }
    }
  `)

  if (newsletters.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  newsletters.data.allFile.edges.forEach(({ node }) => {
    const { permalink, slug } = node.childMarkdownRemark.fields

    actions.createPage({
      component: path.resolve(`src/templates/newsletter.js`),
      context: {
        slug
      },
      path: permalink
    })

    console.log(`created page at ${permalink}`)
  })


  const pages = await graphql(`
    {
      allFile(filter: {
        sourceInstanceName: {
          eq: "pages"
        }
      }) {
        edges {
          node {
            childMarkdownRemark {
              fields {
                permalink
                slug
              }
            }
          }
        }
      }
    }
  `)

  if (pages.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  pages.data.allFile.edges.forEach(({ node }) => {
    const { permalink, slug } = node.childMarkdownRemark.fields

    actions.createPage({
      component: path.resolve(`src/templates/page.js`),
      context: {
        slug
      },
      path: permalink
    })

    console.log(`created page at ${permalink}`)
  })


  const posts = await graphql(`
    {
      allFile(filter: {
        sourceInstanceName: {
          eq: "posts"
        }
      }) {
        edges {
          node {
            childMarkdownRemark {
              fields {
                permalink
                slug
              }
            }
          }
        }
      }
    }
  `)

  if (posts.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  posts.data.allFile.edges.forEach(({ node }) => {
    const { permalink, slug } = node.childMarkdownRemark.fields

    actions.createPage({
      component: path.resolve(`src/templates/post.js`),
      context: {
        slug
      },
      path: permalink
    })
  })
}

exports.onCreateNode = ({ actions, getNode, node }) => {
  const parent = getNode(node.parent)

  if (parent) {
    switch (parent.sourceInstanceName) {
      case 'newsletters': {
        const [, date, slug] = parent.name.match(/^(\d{4}-\d{2}-\d{2})-(.*)/)

        actions.createNodeField({
          node,
          name: `date`,
          value: date
        })

        actions.createNodeField({
          node,
          name: `permalink`,
          value: `/newsletter/archive/${slug}`
        })

        actions.createNodeField({
          node,
          name: `slug`,
          value: slug
        })

        actions.createNodeField({
          node,
          name: `type`,
          value: `newsletter`
        })

        break
      }
      case 'pages': {
        const slug = parent.name

        actions.createNodeField({
          node,
          name: `permalink`,
          value: `/${slug}`
        })

        actions.createNodeField({
          node,
          name: `slug`,
          value: slug
        })

        actions.createNodeField({
          node,
          name: `type`,
          value: `page`
        })

        break
      }
      case 'posts': {
        const [, date, slug] = parent.name.match(/^(\d{4}-\d{2}-\d{2})-(.*)/)

        actions.createNodeField({
          node,
          name: `date`,
          value: date
        })

        actions.createNodeField({
          node,
          name: `permalink`,
          value: `/posts/${slug}`
        })

        actions.createNodeField({
          node,
          name: `slug`,
          value: slug
        })

        actions.createNodeField({
          node,
          name: `type`,
          value: `post`
        })

        break
      }
    }
  }
}
