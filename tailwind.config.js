/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html'],
  theme: {
    extend: {
      colors: {
        'background-main': '#f7f7f7',
        'accent-blue': '#0147ff'
      },
      maxWidth: {
        'container-main': '1440px'
      },
      fontFamily: {
        'roboto-condensed': ['Roboto Condensed', 'sans-serif'],
        'roboto-flex': ['Roboto Flex', 'sans-serif']
      }, 
      fontSize: {
        'font-cta': '15px'
      }
    },
  },
  plugins: [],
}

