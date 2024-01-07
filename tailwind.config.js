/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'blue-dark':'var(--primary-color)',
        'blue-light':'var(--third-color)',
        'beige':'var(--secondary-color)',
        'grey':'var(--fourth-color)',
        'navbar':'var(--navbar-color)',
      },
      fontFamily: {
        'inria':['Inria Sans', 'sans-serif'],
      },
      height: {
        'custom': '340px', 
        'custom1': '720px', 
      },
      width: {
        'custom': '360px', 
        'custom1': '480px', 
      },
    },
  },
  plugins: [],
}