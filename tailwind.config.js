/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        yellowCT: '#fcd535',
        grayCT: '#181A20',
        grayTextCT: '#848e9c',
        arrayInButtonYellow: '#202630'
      },
      
    },
  },
  plugins: [],
}