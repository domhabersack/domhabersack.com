const withMDX = require('@next/mdx')()

module.exports = withMDX({
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
        source: '/newsletter/archive/:slug',
        destination: '/newsletter/:slug',
        permanent: true,
      },
    ]
  },
})
