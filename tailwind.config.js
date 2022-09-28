/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./*.html",
    "./_layouts/*.html",
    "./_includes/*.html",
    "./blog/*.html"
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      colors: {
        primary: '#013eb0',
        teal: colors.teal,
        cyan: colors.cyan,
      },
      backgroundImage: {
        'header-pattern-lg': "url('images/overlay.png'), url('images/pattern-size1.svg')",
        'header-pattern-md': "url('images/overlay.png'), url('images/pattern-size2.svg')",
        'header-pattern': "url('images/overlay.png'), url('images/pattern-size3.svg')",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
