const COLORS = require('./constants');
function pxToRem(px, baseFontSize = 16) {
  const rem = px / baseFontSize;
  return `${rem}rem`;
}
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
    fontFamily: {
      primary: ['Source Sans Pro', 'Calibri', 'Apple SD Gothic Neo', 'Helvetica', 'Arial'],
      icomoon: ['icomoon'],
    },
    borderWidth: {
      //Done
      DEFAULT: '1px',
      0: '0',
      2: '2px',
      3: '3px',
      4: '4px',
      5: '5px',
      6: '6px',
      8: '8px',
    },
    colors: {
      ...COLORS,
    },
    fontSize: {
      '9xl': pxToRem(104),
      '8xl': pxToRem(80),
      '7xl': pxToRem(48),
      '6xl': pxToRem(40),
      '5xl': pxToRem(32),
      '4xl': pxToRem(30),
      '3xl': pxToRem(28),
      '2xl': pxToRem(24),
      xl: pxToRem(20),
      lg: pxToRem(18),
      base: pxToRem(16),
      sm: pxToRem(14),
      xs: pxToRem(13),
      '2xs': pxToRem(12),
      '3xs': pxToRem(10),
    },
    lineHeight: {
      104: pxToRem(104),
      82: pxToRem(82),
      80: pxToRem(80),
      56: pxToRem(56),
      52: pxToRem(52),
      48: pxToRem(48),
      42: pxToRem(42),
      40: pxToRem(40),
      38: pxToRem(38),
      36: pxToRem(36),
      34: pxToRem(34),
      32: pxToRem(32),
      30: pxToRem(30),
      28: pxToRem(28),
      24: pxToRem(24),
      16: pxToRem(16),
      14: pxToRem(14),
      12: pxToRem(12),
      0: 0,
    },
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    objectPosition: {
      //Done
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
      //Done
      xl: '1440px',
      l: '1280px',
      lg: '1024px',
      md: '768px',
      smd: '767px',
      sm: '425px',
    },
    container: {
      padding: '25px',
    },
    maxWidth: {
      nxl: '1170px',
      nlg: '970px',
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
    transitionDuration: {
      6000: '6000ms',
    },
    keyframes: {
      progress: {
        from: { width: '0%' },
        to: { width: '100%' },
      },
    },
    animation: {
      progress: 'progress 6s linear forwards',
    },
  },
};
