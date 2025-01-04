/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        yellowCT: "#fcd535",
        grayCT: "#181A20",  //item card,
        grayBody: "#0a0d10",  //item body,
        grayTextCT: "#848e9c", //trong table,
        grayInButtonYellow: "#202630",
        whiteCT: "#eaecef",
      },
      screens: {
        xxl: "2000px", // Thêm breakpoint cho 2000px
      },
    },
  },
  plugins: [],
};
