module.exports = {
  mode: 'jit',
  purge: [
    './public/**/*.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'nunito': 'Nunito Sans, sans-serif',
        'roboto': 'Roboto, sans-serif',
        'raleway': 'Raleway, sans-serif',
      },
      fontSize: {
        '13': '13px',
        '26': '26px',
      },
      colors: {
        'brand-green': '#58D16F',
        'brand-dakr-green': '#49c761',
        'brand-gray': '#E5E5E5',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
