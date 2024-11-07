/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./main.html, pricing.html'],
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
