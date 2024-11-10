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
        "home-banner": "url('header-bg.svg')",
        "team-banner": "url('team-bg.svg')",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      screens: {
        "below-1000": { min: "999px" },
      },
    },
    plugins: [],
  },
};
