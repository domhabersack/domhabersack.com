const withMDX = require('@next/mdx')()

const redirects = require('./redirects.json')

module.exports = withMDX({
  eslint: {
    dirs: ['pages', 'src'],
  },

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
    return Object.entries(redirects).map(([source, destination]) => ({
      source,
      destination,
      permanent: true,
    }))
  },
})
