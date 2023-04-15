/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        brushscript: "brush script mt, cursive",
      },
      backgroundImage: {
        potrait: "url('/potrait.jpeg')",
        ballet: "url('/ballet.jpeg')",
      },
    },
  },
  plugins: [],
}
