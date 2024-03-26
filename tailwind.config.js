/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "#ffffff",
      diamond: "#0b90a0",
      night: "#152C5B",
      stone: "#00000092",
      brick: "#D57F5D",
    },
    fontFamily: {
      sans: ["Nunito Sans", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {},
  },
  plugins: [],
};
