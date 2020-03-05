module.exports = {
  siteMetadata: {
    description: ``,
    siteUrl: `https://islovely.co`,
    title: ``
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [
          require('postcss-combine-media-query')()
        ]
      }
    }, {
      resolve: `gatsby-source-filesystem`,
      options: {
        ignore: [`**/\.*`],
        name: `courses`,
        path: `${__dirname}/_courses`,
      }
    }, {
      resolve: `gatsby-source-filesystem`,
      options: {
        ignore: [`**/\.*`],
        name: `newsletters`,
        path: `${__dirname}/_newsletters`,
      }
    }, {
      resolve: `gatsby-source-filesystem`,
      options: {
        ignore: [`**/\.*`],
        name: `pages`,
        path: `${__dirname}/_pages`,
      }
    }, {
      resolve: `gatsby-source-filesystem`,
      options: {
        ignore: [`**/\.*`],
        name: `projects`,
        path: `${__dirname}/_projects`,
      }
    }, {
      resolve: `gatsby-source-filesystem`,
      options: {
        ignore: [`**/\.*`],
        name: `posts`,
        path: `${__dirname}/_posts`,
      }
    }, {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
            }
          }
        ]
      }
    }, {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        query: `{
          site {
            siteMetadata {
              siteUrl
            }
          }
          allSitePage(
            sort: {
              fields: path
            }
          ) {
            edges {
              node {
                path
              }
            }
          }
        }`,
        serialize: ({ allSitePage, site }) => {
          const pages = allSitePage.edges.map(({ node }) => node)
          const { siteUrl } = site.siteMetadata

          return pages.map(({ path }) => ({
            url: `${siteUrl}${path}`
          }))
        }
      }
    },
    `gatsby-plugin-react-helmet`,
  ]
}
