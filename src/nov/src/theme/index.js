const base = require('./tailwind.base');
const primary = require('./tailwind.primary');
const secondary = require('./tailwind.secondary');

module.exports = {
  base: base,
  primary: primary,
  secondary: secondary,
  themes: [primary, secondary],
};
