/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'kalam': ['Kalam', 'cursive'],
        'barriecito': ['Barriecito', 'cursive'],
        'flower': ['Indie Flower', 'cursive'],
      }
    },
  },
  plugins: [],
}