/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      android: "280px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      lgs: "1100px",
      xl: "1280px",
    },
    extend: {
      zIndex: {
        infinity: "999",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      flex: {
        custom: "1 1 300px",
        custom_2: "1 1 280px",
      },
      colors: {
        "hover-page": "#0c06ac",
        "color-page": "#00535B",
        "light-blue": "#8CDDE2",
        "color-dashboard": "#EFF4FE",
        "gray-sub": "#828282",
        "dark-gray": "#565656",
        red: "#FF0000",
        "blue-dashboard": "#8BBAFF30",
        "dashboard-line": "#337CCF",
        "event-color": "#D9D9D9",
        "absent-color": "#FEDADA",
        "absent-green-color": "#DBFEDA",
        "blue-button": "#4690E4",
      },
      gridTemplateColumns: {
        dashboard: "60% auto",
      },
    },
  },
  plugins: [],
};
