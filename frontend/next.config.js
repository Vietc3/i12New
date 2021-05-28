module.exports = {
    typescript: {
      ignoreBuildErrors: true,
    },
    env: {
      NEXT_PUBLIC_BASE_URL: 'http://localhost:1337',
      NEXT_PUBLIC_BASE_URL_PRODUCT: 'https://api.staging.playitright.com',
      NEXT_PUBLIC_BASE_URL_SALES_PRODUCT: 'https://staging.playitright.com',
      NEXT_PUBLIC_BASE_URL_CLIENT: 'http://localhost:3000'
    },

}