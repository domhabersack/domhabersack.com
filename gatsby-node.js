/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require(`path`)

const slugify = text => text.toLowerCase().replace(/ /g, '-')

exports.createPages = async ({ actions, graphql, reporter }) => {
  const courses = await graphql(`
    {
      allFile(filter: {
        sourceInstanceName: {
          eq: "courses"
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

  if (courses.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  courses.data.allFile.edges.forEach(({ node }) => {
    const { permalink, slug } = node.childMarkdownRemark.fields

    actions.createPage({
      component: path.resolve(`src/templates/course.js`),
      context: {
        slug
      },
      path: permalink
    })

    console.log(`created page at ${permalink}`)
  })


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


  const projects = await graphql(`
    {
      allFile(filter: {
        sourceInstanceName: {
          eq: "projects"
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

  if (projects.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  projects.data.allFile.edges.forEach(({ node }) => {
    const { permalink, slug } = node.childMarkdownRemark.fields

    actions.createPage({
      component: path.resolve(`src/templates/project.js`),
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
              frontmatter {
                categories
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

    console.log(`created page at ${permalink}`)
  })


  const allCategories = posts.data.allFile.edges.map(({ node }) => node.childMarkdownRemark.frontmatter.categories).reduce((allCategories, categories) => [...new Set([...allCategories, ...categories])], [])
  allCategories.forEach(category => {
    const permalink = `/categories/${slugify(category)}`

    actions.createPage({
      component: path.resolve(`src/templates/category.js`),
      context: {
        category
      },
      path: permalink
    })

    console.log(`created page at ${permalink}`)
  })

  console.log({ allCategories })

}

exports.onCreateNode = ({ actions, getNode, node }) => {
  const parent = getNode(node.parent)

  if (parent) {
    switch (parent.sourceInstanceName) {
      case 'courses': {
        const slug = parent.name

        actions.createNodeField({
          node,
          name: `permalink`,
          value: `/courses/${slug}`
        })

        actions.createNodeField({
          node,
          name: `slug`,
          value: slug
        })

        actions.createNodeField({
          node,
          name: `type`,
          value: `course`
        })

        break
      }
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
      case 'projects': {
        const slug = parent.name

        actions.createNodeField({
          node,
          name: `permalink`,
          value: `/projects/${slug}`
        })

        actions.createNodeField({
          node,
          name: `slug`,
          value: slug
        })

        actions.createNodeField({
          node,
          name: `type`,
          value: `project`
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
