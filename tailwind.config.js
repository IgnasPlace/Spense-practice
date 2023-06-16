/* eslint-env node */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "my-light-grey": "#eeebe8",
      },
      fontFamily: {
        cabin: ["Cabin", "cursive"],
      },
      screens: {
        xs: "500px",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
};
