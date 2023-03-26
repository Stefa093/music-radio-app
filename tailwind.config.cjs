/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'music.patern': "url('https://unsplash.com/es/fotos/hgO1wFPXl3I')"
      }
    },
  },
  plugins: [],
}
