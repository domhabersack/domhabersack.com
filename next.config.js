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
