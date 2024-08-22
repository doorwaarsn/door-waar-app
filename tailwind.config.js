/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/primereact/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        serif: ["Merriweather", "serif"],
        cursive: ['"Montserrat"', "cursive"],
      },
      fontSize: {
        12: "12px",
        15: "15px",
        18: "18px",
      },
      colors: {
        "custom-red": "#ff2d55",
        "custom-blue": "#0095ff",
        "custom-green": "#00e096",
        "custom-gray": "#eff4fa",
        "custom-yellow": "#ffb45e",
        "custom-purple": "#A020F0",
        "top-color": "#8e4d57",
        heading: "#fcfbfc",
      },
    },
  },
  plugins: [],
};
