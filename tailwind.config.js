const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      black: colors.black,
      white: '#E4E2DC',
      gray: '#A09F9C',
      green: '#1F3517',
      yellow: '#DB9E5F'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
