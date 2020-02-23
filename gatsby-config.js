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
