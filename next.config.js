module.exports = {
  env: {
    BUTTONDOWN_API_KEY: process.env.BUTTONDOWN_API_KEY,
    GA_ID: process.env.GA_ID,
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./scripts/generate-sitemap')
    }
    return config
  },
}
