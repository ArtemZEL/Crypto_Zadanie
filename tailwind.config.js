/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: "Nunito",
        lato: "Lato",
        inter:"Inter"
      },
    },
    colors:{
      gray: { 100: "#808080", 200: "#323232", 300: "#212121" , 400:"#454545"},
      white: "#fff",
      cyan: "#14ffec",
      red: "#d6436e",
      green: "#25da72",
      blue: '#0991DE',
    },
    fontSize:{
      sm: "14px", md: "18px", lg: "24px", xl: "32px", base: "16px"
    }
  },
  plugins: [],
};
