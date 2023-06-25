/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html'],
  theme: {
    screens: {
      sm:{max:"480px"},
      md:{min:"1400px"},
      medium:{max:"960px"},
      lg:{max:"1400px"},
      xl:{max:"1600px"}
     },
    extend: {},
  },
  plugins: [],
}

