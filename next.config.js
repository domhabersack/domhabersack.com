const withMDX = require('@next/mdx')()

const redirects = require('./redirects.json')

const securityHeadersRaw = {
  'Content-Security-Policy': `
    default-src 'self';
    connect-src 'self' *.domhabersack.com${process.env.NODE_ENV === 'development' ? ' localhost:*' : ''};
    img-src * data:;
    script-src 'self' 'unsafe-eval' 'unsafe-inline' *.domhabersack.com cdn.iubenda.com;
    style-src 'self' 'unsafe-inline';
    frame-ancestors 'self';
    form-action 'self';
  `.replace(/\n/g, '').replace(/\s+/g, ' ').trim(),
  'Permission-Policy': 'camera=(), microphone=(), geolocation=()',
  'Referrer-Policy': 'no-referrer-when-downgrade',
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'X-DNS-Prefetch-Control': 'on',
  'X-XSS-Protection': '1; mode=block',
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
        source: '/(.*)',
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
