/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      android: "360px",
      md: "768px",
      lg: "1024px",
    },
    extend: {
      flex: {
        custom: "1 1 300px",
        custom_2: "1 1 280px",
      },
      colors: {
        "color-page": "#00535B",
        "light-blue": "#8CDDE2",
        "color-dashboard": "#EFF4FE",
        "gray-sub": "#828282",
        "dark-gray": "#565656",
        red: "#FF0000",
      },
    },
  },
  plugins: [],
};
