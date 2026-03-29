
/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        forest: '#1B4332',
        sage: '#52796F',
        gold: '#D4A843',
        cream: '#FAFAF5',
        darkText: '#1A1A1A'
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['"Source Sans 3"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
