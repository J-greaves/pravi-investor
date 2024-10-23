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
      backgroundImage: {
        "home-banner": "url('/public/pravi-bg.png')",
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
    },
    plugins: [],
  },
};
