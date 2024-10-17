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
          1: '#50a5b1',
          2: '#1a265a'
        },
        orange: {
          1: '#f1600d',
          2: "#c44a04",
        },
        gray: {
          1: '##fef6ed'
        },
      }
    },
  },
  plugins: [],
}

