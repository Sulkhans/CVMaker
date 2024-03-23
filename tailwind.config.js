/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        unauth: "url(assets/bg.png)",
      },
      boxShadow: {
        lg: "-10px -10px 20px 0px rgba(0, 0, 0, 0.25)",
      },
      colors: {
        custom: {
          orange: "#F4A448",
          blue: "#143C57",
          "light-orange": "#FFF2E2",
          "light-blue": "#194A6C",
        },
      },
    },
  },
  plugins: [],
};
