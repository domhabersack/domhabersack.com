const withMDX = require('@next/mdx')()

module.exports = withMDX({
  images: {
    disableStaticImages: true,
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    })

    return config
  },

  async redirects() {
    return [
      {
        source: '/categories/:slug',
        destination: '/posts/categories/:slug',
        permanent: true,
      }, {
        source: '/newsletter/archive/:slug',
        destination: '/newsletter/:slug',
        permanent: true,
      },
    ]
  },
})

// JUMP /posts
// MOVE /posts/:slug
// JUMP /newsletter
// MOVE /newsletter/:slug
// GONE /newsletter/archive
// GONE /firetips/tags
// GONE /firetips/tags/:slug
