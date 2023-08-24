/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#222831',
        secondary:'#393E46',
        third:'#EEEEEE',
        softWhite:'#F9F7F7',
        primaryBlue:'#00ADB5',
        primaryGrey:'#7F8487',
        warning:'#FF9EAA',
        selected:'#0C356A'
      }
    },
  },
  plugins: [],
}