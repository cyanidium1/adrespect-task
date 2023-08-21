/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    container: {
      padding: "90px",
    },
    fontSize: {
      xs: "12px",
      base: "14px",
      xl: "16px",
      "2xl": "28px",
      "2.5xl": "40px",
      "3xl": "48px",
      "4xl": "60px ",
    },
    extend: {
      colors: {
        pink: "#DCC1AB",
        green: "#1B5B31",
        black: "#111111",
        almostWhite: "#F5F0EC",
      },
    },
  },
  plugins: [],
};
