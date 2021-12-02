module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      dropShadow: {
        '3xl': '0 35px 35px rgba(64, 191, 80, 0)',
      }
    }
  },
  variants: {
    dropShadow: ['hover', 'focus'],
  },
  plugins: [],
}
