// eslint-disable-next-line import/no-extraneous-dependencies
const typography = require('@tailwindcss/typography');

module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [typography],
};
