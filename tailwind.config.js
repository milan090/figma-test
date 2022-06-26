/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Inter'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
      },
      colors: {
        grey: "#4D4D4D",
        lightgrey: "#E1E4E8",
        darkgrey: "#5A5A65",
        lavender: "#F0E7F6",
        rose: "#FFDCE0",
      },
    },
  },
  plugins: [],
};
