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
};
