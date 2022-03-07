const isDev = process.env.NODE_ENV !== 'production'

module.exports = {
  webpack: (config, { isServer }) => {
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
