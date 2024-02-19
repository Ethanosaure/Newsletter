/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/src/*.js", "index.html"],
  theme: {
    screens: {
      sm: "1px",
      xl: "800px",
    },
    extend: {
      colors: {
        darkSlateGrey: "#242533",
        charcoalGrey: "#353642",
        grey: "#8E8F99",
        white: "#FFFFFF",
        tomato: "#AA0800",
        salmon: "#ff5379",
        orange: "#ff673e",
      },
    },
  },
  plugins: [],
};
