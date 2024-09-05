// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'custom-green': '#EEF6EF',
        'custom-grey':'#BDBDBD',
        'placeholder-text':'#1B281B',
        'btn-color':'#357937',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
