/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        background:'rgb(30, 30, 30);',
        linkYellow:'yellow',
        contactHover:'rgb(235,235,235)',
        cardBg:'rgb(54,54,54)'
      }
    },
  },
  plugins: [],
}

