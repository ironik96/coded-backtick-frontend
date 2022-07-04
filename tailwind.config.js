/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        green: "#1DAD91",
        black: "#2A2A2A",
        blue: "#3383F9",
        grey: "#869199",
        "grey-background": "#8B8D8F",
        red: "#DF6D45",
        "light-grey": "#F6F8FA",
        yellow: "#FDCA4B",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
