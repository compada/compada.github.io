/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      backgroundImage: {
        'header-pattern-lg': "url('images/overlay.png'), url('images/pattern-size1.svg')",
        'header-pattern-md': "url('images/overlay.png'), url('images/pattern-size2.svg')",
        'header-pattern': "url('images/overlay.png'), url('images/pattern-size3.svg')",
      }
    },
  },
  plugins: [],
}
