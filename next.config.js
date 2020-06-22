module.exports = {
    env: {
      API_URL: process.env.API_URL,
      FETCH_METHOD: process.env.FETCH_METHOD,
      ASSETS_URL: process.env.ASSETS_URL
    },
    webpack: (config) => {
        delete config.resolve.alias.url;
    
        return config
      },
  }
  