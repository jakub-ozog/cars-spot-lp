/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html'],
  theme: {
    extend: {
      colors: {
        'white-main': '#f7f7f7',
        'accent-blue': '#0147ff',
        'black-main': '#282828'
      },
      maxWidth: {
        'container-main': '1440px',
      },
      screens: {
        'xl-screen': '1920px',
        'xxl-screen': '2560px'
      },
      fontFamily: {
        'roboto-condensed': ['Roboto Condensed', 'sans-serif'],
        'roboto-flex': ['Roboto Flex', 'sans-serif'],
        'bebas-neue': ['Bebas Neue', 'sans-serif']
      },
      fontSize: {
        'font-cta': '15px',
        'font-seo': '25px'
      },
    },
  },
  plugins: [],
}

