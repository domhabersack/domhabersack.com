const withMDX = require('@next/mdx')()

// const config = require('./src/config')
const redirects = require('./redirects.json')

const securityHeadersRaw = {
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'Content-Security-Policy': `default-src: 'none';`
  // 'Content-Security-Policy': `
  //   default-src 'self' ${config.siteUrl} *.${config.siteUrl};
  //   img-src * blob: data:;
  // `.replace(/\n/g, '').replace(/\s+/g, ' ').trim(),

  // 'Referrer-Policy': 'origin-when-cross-origin',
  // "",
  // "no-referrer",
  // "no-referrer-when-downgrade",
  // "same-origin",
  // "origin",
  // "strict-origin",
  // "origin-when-cross-origin",
  // "strict-origin-when-cross-origin",
  // "unsafe-url"

  // 'X-DNS-Prefetch-Control': 'on',
  // 'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
  // 'Permission-Policy': 'camera=(), microphone=(), geolocation=()',
}

const securityHeaders = Object.entries(securityHeadersRaw).map(([key, value]) => ({
  key,
  value,
}))

module.exports = withMDX({
  eslint: {
    dirs: ['pages', 'src'],
  },

  images: {
    disableStaticImages: true,
  },

  webpack5: false,

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    })

    return config
  },

  async headers() {
    return [
      {
        source: '/',
        headers: securityHeaders,
      }, {
        source: '/:path*',
        headers: securityHeaders,
      }
    ]
  },

  async redirects() {
    return Object.entries(redirects).map(([source, destination]) => ({
      source,
      destination,
      permanent: true,
    }))
  },
})
