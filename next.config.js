const withMDX = require('@next/mdx')()

const redirects = require('./redirects.json')

const securityHeadersRaw = {
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',

  'Referrer-Policy': 'origin-when-cross-origin',
  // "",
  // "no-referrer",
  // "no-referrer-when-downgrade",
  // "same-origin",
  // "origin",
  // "strict-origin",
  // "origin-when-cross-origin",
  // "strict-origin-when-cross-origin",
  // "unsafe-url"

  'Content-Security-Policy': `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline' *.youtube.com *.twitter.com;
    child-src *.youtube.com *.google.com *.twitter.com;
    style-src 'self' 'unsafe-inline' *.googleapis.com;
    img-src * blob: data:;
    media-src 'none';
    connect-src *;
    font-src 'self';
  `.replace(/\n/g, '').replace(/\s+/g, ' ').trim(),
  'X-DNS-Prefetch-Control': 'on',
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
  'Permission-Policy': 'camera=(), microphone=(), geolocation=()',
}

const securityHeaders = Object.entries(securityHeadersRaw).map(([key, value]) => ({
  key,
  value,
}))

console.log(securityHeaders)

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
