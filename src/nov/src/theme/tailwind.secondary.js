const COLORS = require('./constants');

module.exports = {
  name: 'Secondary',
  extend: {
    colors: {
      ...COLORS,
      primary: COLORS.green,
      'theme-btn-primary-text': COLORS.white,
    },
  },
};
