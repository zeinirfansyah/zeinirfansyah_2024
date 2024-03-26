/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "#ffffff",
      
      dimGray: "#6A6A6A",
      davysGray: "#4C4C4C",
      onyx: "#404040",
      black: "000000",

      brick: "#D57F5D",
      blueMunsell: "#0b90a0",
    },
    fontFamily: {
      sans: ["Nunito Sans", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {},
  },
  plugins: [],
};
