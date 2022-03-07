/* eslint-disable import/no-extraneous-dependencies */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        green: 'var(--green)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
