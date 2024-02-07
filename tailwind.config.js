/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ["Outfit", "sans-serif"],
      seirf: ["Young Serif", "serif"],
    },
    extend: {
      backgroundColor: {
        main_pink: "#F3E5D7",
      },
      colors: {
        "wenge-brown": "#5F564D",
        snow: "#FFF7FB",
        "dark-resbarry": "#7A284E",
      },
    },
  },
  plugins: [],
};
