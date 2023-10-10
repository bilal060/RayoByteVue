/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "auth-main": "0px 0px 50px 0px rgba(0, 0, 0, 0.23)",
        sidebar: "5px 0px 18px 0px rgba(0, 0, 0, 0.06)",
        sidebarDark: "5px 0px 18px 0px rgba(255, 255, 255, 0.06)",
        header: "0px 4px 18px 0px rgba(0, 0, 0, 0.06)",
        headerDark: "0px 4px 18px 0px rgba(255, 255, 255, 0.06)",
        card: "0px 6px 18px 0px rgba(0, 0, 0, 0.06)",
        cardDark: "0px 6px 18px 0px rgba(255, 255, 255, 0.06)",
      },
      screens: {
        xs: "400px",
        ssm: "500px",
        min900: "900px",
      },
    },
  },
  plugins: [],
};
