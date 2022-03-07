/* eslint-disable import/no-extraneous-dependencies */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        green: 'var(--green)',
      },
      screens: {
        sm: { max: '767px' },
        md: { min: '768px', max: '1024px' },
        'md-down': { max: '1024px' },
        // large org value: 1279
        lg: { min: '1025px' },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
