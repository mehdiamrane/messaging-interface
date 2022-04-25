const { i18n } = require('./next-i18next.config');

module.exports = {
  i18n,
  env: {
    NEXT_API_BASE_URL: process.env.NEXT_API_BASE_URL,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['ui-avatars.com'],
  },
};
