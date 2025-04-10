const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: "rgb(var(--color-primary))",
      secondary: "rgb(var(--color-secondary))",
      white: "#fff",
      black: "#000",
    },
    extend: {
      fontFamily: {
        sans: ["Fugue", ...defaultTheme.fontFamily.sans],
        serif: ["EB Garamond", ...defaultTheme.fontFamily.serif],
      },
      fontSize: {
        "4.5xl": ["2.75rem", "1"],
      },
      spacing: {
        navbarHeight: "6.5rem",
        navbarHeightDesktop: "4.5rem",
        "1/5": "20%",
      },
    },
  },
  plugins: [],
};
