/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      Inter: ["Inter", "sans-serif"],
      FiraCode: ["Fira Code", "monospace"],
    },
    colors: {
      "main-dark": "#181a20",
      primary: "#64ffda",
      secondary: "#6d7792",
      white: "#fff",
      "off-white": "#ccd6f6",
      unhovered: "#999999",
    },
    extend: {},
  },
  plugins: [],
};
