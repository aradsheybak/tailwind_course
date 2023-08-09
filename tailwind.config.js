/** @type {import('tailwindcss').Config} */
export default {
content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "light-blue":"#1DA1F2",
        "crimson":"#102C57",
        "light-gray":"#9DB2BF"
      }
    },
  },
  plugins: [],
}

