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
        small: ["1.125rem", "1.5rem"],
        "smallest-desktop": ["1.25rem", "1.5rem"],
        medium: ["1.5rem", "1.875rem"],
        "small-desktop": ["1.875rem", "2.25rem"],
        large: ["2rem", "2.5rem"],
        "extra-large": ["2.5rem", "3rem"],
        "extra-extra-large": ["3rem", "3.5rem"],
      },
      spacing: {
        navbarHeight: "6.5rem",
        navbarHeightDesktop: "6.75rem",
        "1/3": "33%",
      },
    },
  },
  plugins: [],
};
