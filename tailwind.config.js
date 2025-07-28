/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
    extend: {
      colors: {
        burgundy: '#800020',
        cream: '#FFF5E1',
        warmGray: '#B0A8B9',
        gold: {
          light: '#FFD700',
          dark: '#D4AF37',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Open Sans"', 'sans-serif'],
      },
    },
  plugins: [],
}
