/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        slate:{
          700: '#2b3442',
          800: '#1e2a47',
          900: '#141d2f',
          950: '#222731',
        },
        white: {
          100: '#ffffff',
          200: '#fefefe',
          300: '#f6f8ff',
        },
        blue: {
          500: '#90A4D4',
          600: '#0079ff',
          700: '#697c9a',
          800: '#4b6a9b',
        }
      },
    },
  },
  plugins: [],
}

