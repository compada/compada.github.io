/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    colors: {
      'primary': '#013eb0',
      'white': 'white'
    },
    extend: {
      backgroundImage: {
        'header-pattern-lg': "url('images/overlay.png'), url('images/pattern-size1.svg')",
        'header-pattern-md': "url('images/overlay.png'), url('images/pattern-size2.svg')",
        'header-pattern': "url('images/overlay.png'), url('images/pattern-size3.svg')",
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
