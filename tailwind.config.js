/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        topMenu: {
          "0%": { transform: "translate3d(0, -30px, 0)", opacity: 0 },
          "100%": { transform: "translate3d(0, 0, 0)", opacity: 1 },
        },
        light: {
          "0%": { transform: "translateX(30px)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        topMenu: "topMenu 0.5s forwards",
        light: "light 2s infinite alternate",
      },
      colors: {
        brand: "#17F9FF",
      },
      fontFamily: {
        montserrat: ["Montserrat"],
      },
      boxShadow: {
        "3xl":
          "inset 0 0 30px 0 #fff, inset 20px 0 30px #ffd400, inset -20px 0 30px red, inset 20px 0 300px #ff40d6, inset -20px 0 300px #e3ff4b, 0 0 50px #fff, -10px 0 100px #fbff00, 10px 0 80px #f55",
      },
      dropShadow: {
        "3xl": "1px 3px 4px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
