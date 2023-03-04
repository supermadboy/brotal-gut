const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      primary: 'rgb(var(--color-primary))'
    },
    extend: {
      fontFamily: {
        'sans': ['Fugue', ...defaultTheme.fontFamily.sans],
      },
    }
  },
  plugins: [],
}