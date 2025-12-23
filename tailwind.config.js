/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,css,js}", "./public/**/*.{html,css,js}"],
  theme: {
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        home: "url('/assets/images/bg.png')",
      },
    },
  },
  plugins: [],
};
