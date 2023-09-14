const plugin = require('tailwindcss/plugin');
const themes = require('./src/theme');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  plugins: [
    require('tailwindcss-themer')({
      defaultTheme: {
        extend: themes.themes[0],
      },
      themes: themes.themes,
    }),
  ],
  theme: themes.base,
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'bg-gradient': (angle) => ({
            'background-image': `linear-gradient(${angle}, var(--tw-gradient-stops))`,
          }),
        },
        {
          values: Object.assign(theme('bgGradientDeg', {}), {
            0: '0deg',
            10: '10deg',
            15: '15deg',
            20: '20deg',
            25: '25deg',
            30: '30deg',
            45: '45deg',
            60: '60deg',
            90: '90deg',
            120: '120deg',
            135: '135deg',
            198: '198deg',
          }),
        }
      );
    }),
  ],
};
