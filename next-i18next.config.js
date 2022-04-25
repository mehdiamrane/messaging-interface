const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'en-US',
    locales: ['en-US', 'fr'],
    localePath: path.resolve('./public/locales'),
  },
};
