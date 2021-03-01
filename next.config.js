const isDev = process.env.NODE_ENV !== 'production'

module.exports = {
  env: {
    BUTTONDOWN_API_KEY: process.env.BUTTONDOWN_API_KEY,
    NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID,
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            // // https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP
            key: 'Content-Security-Policy',
            value: "default-src [your-domains...] 'self' data: 'unsafe-inline'",
          },
        ],
      },
    ]
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./scripts/generate-sitemap')
    }
    // Replace React with Preact only in client production build
    if (!isDev && !isServer) {
      Object.assign(config.resolve.alias, {
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat',
      })
    }
    return config
  },
}
