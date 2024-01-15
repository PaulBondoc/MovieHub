/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        background: "#1B1B1B",
        primary: "#595959",
        secondary: "#323232",
        accent: "#E70000",
        white: "#f5f5f5",
        hoveredAccent: "#af0505",
        hoveredPrimary: "#4f4f4f",
        blackglass: "rgba(0,0,0,.5)",
      },
      boxShadow: {
        sm: "0 0 8px",
        lg: "0 5px 20px -3px #000",
        navShadow: "0 0 4px #00000099",
        myShadow: "0 0 100px 100px #1B1B1B",
      },
      screens: {
        xxs: "360px",
        xs: "555px",
        sm: "650px",
        md: "800px",
        mdl: "970px",
        lg: "1170px",
        xl: "1350px",
      },
    },
  },
  plugins: [],
};
