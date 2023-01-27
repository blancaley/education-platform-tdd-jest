/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["sans-serif"],
      serif: ["serif"],
    },
    colors: {
      black: colors.black,
      white: colors.white,
      gray: colors.slate,
      red: colors.red,
      green: colors.green,
      yellow: colors.yellow,
      blue: colors.blue,
      teal: colors.teal,
      pink: colors.pink,
      purple: colors.purple,
    },
  },
};
