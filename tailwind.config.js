/** @type {import('tailwindcss').Config} */
module.exports = {
  error: "class",
  content: ["./public/src/*.js", "index.html"],
  theme: {
    screens: {
      md: "768px",
      xl: "1000px",
    },
    extend: {
      backgroundImage: {
        illustrationSignUp:
          "url('/public/images/illustration-sign-up-desktop.svg')",
      },
      colors: {
        darkSlateGrey: "#242533",
        charcoalGrey: "#353642",
        grey: "#8E8F99",
        white: "#FFFFFF",
        tomato: "#AA0800",
        salmon: "#ff5379",
        orange: "#ff673e",
        errorText: "#ef877d",
        errorInput: "#ffe8e6",
        errorInputPlaceholder: "#ffe8e6",
      },
    },
  },
  plugins: [],
};
