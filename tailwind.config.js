/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "#ffffff",
      antiFlashWhite: "#EAECEE",

      dimGray: "#6A6A6A",
      davysGray: "#4C4C4C",
      onyx: "#404040",
      black: "000000",

      brick: "#D57F5D",
      blueMunsell: "#10808F",
      blueAirForce: "#004D61",
    },
    fontFamily: {
      sans: ["Nunito Sans", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      keyframes: {
        float: {
          "0%": {
            transform: "translateY(0%), rotate(3deg)",
          },
          "50%": {
            transform: "translateY(-5%)",
          },
          "100%": {
            transform: "translateY(0%), rotate(3deg)",
          }
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
