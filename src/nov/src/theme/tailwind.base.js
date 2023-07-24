const COLORS = require('./constants');

module.exports = {
  name: 'Base',
  extend: {
    aspectRatio: {
      hero: '21 / 9',
      video: '16 / 9',
      picture: '4 / 3',
      snapshot: '3 / 2',
      portrait: '2 / 3',
      square: '1 / 1',
    },
    borderWidth: {
      DEFAULT: '1px',
      0: '0',
      2: '2px',
      3: '3px',
      4: '4px',
      6: '6px',
      8: '8px',
    },
    colors: {
      ...COLORS,
      'theme-btn-primary-text': COLORS.black,
    },
    extend: {
      gap: {
        s: '1rem',
      },
    },
    objectPosition: {
      bottom: 'bottom',
      left: 'left',
      right: 'right',
      top: 'top',
      'left-bottom': 'left bottom',
      'right-bottom': 'right bottom',
      'left-top': 'left top',
      'right-top': 'right top',
    },
    screens: {
      xl: '1440px',
      lg: '1200px',
      ml: '960px',
      md: '672px',
      sm: '375px',
    },
    spacing: {
      xxl: '7.5rem',
      xl: '5rem',
      l: '2.5rem',
      ml: '2rem',
      m: '1.5rem',
      s: '1rem',
      xs: '0.75rem',
      xxs: '0.5rem',
      xxxs: '0.25rem',
      0: '0px',
    },
  },
};
