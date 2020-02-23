module.exports = {
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
        name: `newsletters`,
        path: `${__dirname}/_newsletters`,
      },
    }, {
      resolve: `gatsby-source-filesystem`,
      options: {
        ignore: [`**/\.*`],
        name: `pages`,
        path: `${__dirname}/_pages`,
      },
    }, {
      resolve: `gatsby-source-filesystem`,
      options: {
        ignore: [`**/\.*`],
        name: `posts`,
        path: `${__dirname}/_posts`,
      },
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
    },
    `gatsby-plugin-react-helmet`
  ]
}
