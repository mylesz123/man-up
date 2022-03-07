// eslint-disable-next-line import/no-extraneous-dependencies
const typography = require('@tailwindcss/typography');

module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [typography],
};
