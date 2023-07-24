const base = require('./tailwind.base');
const primary = require('./tailwind.primary');
const secondary = require('./tailwind.secondary');

module.exports = {
  Base: base,
  Primary: primary,
  Secondary: secondary,
  themes: [primary, secondary],
};
