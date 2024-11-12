/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        'blue': '#007aff'
      },
      fontFamily: {
        apple: ['SF Pro Display', 'sans-serif'],
      },
    },
    plugins: [],
  }
}
