/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          1: '#177c82',
          2: '#1469fc',
        },
        orange: {
          1: '#f1600d',
          2: "#c44a04",
        },
        gray: {
          1: "#6b7385",
          2: '#192335'
        },
        green: {
          1: "#aaf40c",
          2: "#097e52",
        },
      },
      fontSize: {
        md: '18px'
      }
    },

  },
  plugins: [],
}

