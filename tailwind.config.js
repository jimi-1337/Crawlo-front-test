/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ff8c00',
        secondary: '#ecc94b',
        // ...
      },
      spacing: {
        '38': '9rem',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
