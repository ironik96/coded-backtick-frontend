/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'theme-blue': '#3383F9',
        'theme-yellow': '#FDCA4B',
        'theme-green': '#1DAD91',
        'theme-dark-grey': '#869199',
        'theme-light-grey': '#F6F8FA',
        'theme-red': '#DF6D45',
        'theme-grey': '#ECF1F6',
        

      },
    },
  },
  plugins: [],
}
