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
      yellow: '#DF9C61'
    },
    extend: {
      keyframes: {
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        }
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.30s ease-out'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
