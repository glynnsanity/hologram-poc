const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{html,ts,js,ts,tsx}', './components/**/*.{html,ts,js,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Helvetica', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        green: '#335510',
        peach: '#FEF6F1',
        grey: '#F6F6F6',
        oldyellow: '#FCE5AE',
        charcoal: '#222720',
        beigey: '#F8F6F0',
        greyish: '#E1DCD5',
        redsy: '#E74B38',
        newgrey: '#999691',
      },
    },
  },
  plugins: [],
}
