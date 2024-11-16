/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-pink": "#DB0F79",
        "custom-pink-border": "#ff8ac2",
        "custom-grey": "#454545",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      screens: {
        "below-1000": { min: "999px" },
        "below-1200": { min: "1199px" },
        "below-2200": { min: "2200px" },
      },
    },
    plugins: [],
  },
};
