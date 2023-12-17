/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'dark-theme' : '#030E21',
        'navbar' : '#17a2b8',
        'card' : '#95d5b2',
        'bali' : '#f7f7f7#00FF00',
      },

      fontFamily: {
      poppins : ['Poppins, sans-serif'],
      }

    },
  },
  plugins: [],
}