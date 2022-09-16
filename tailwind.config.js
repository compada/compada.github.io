/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./*.html",
    "./_layouts/*.html",
    "./_includes/*.html"
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      colors: {
        'primary': '#013eb0'
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
  ],
}
