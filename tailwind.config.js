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
      colors: {
        "color-page": "#00535B",
        "light-blue": "#8CDDE2",
      },
    },
  },
  plugins: [],
};
