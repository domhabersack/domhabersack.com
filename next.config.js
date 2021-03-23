const images = require('remark-images')

const withMDX = require('@next/mdx')({
  extensions: /\.mdx?$/,
  options: {
    remarkPlugins: [
      images,
    ],
  },
})

module.exports = withMDX({
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    })

    return config
  },
})
