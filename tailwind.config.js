const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Lexend Deca'", ...defaultTheme.fontFamily.sans],
        display: ["'Big Shoulders Display'"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
