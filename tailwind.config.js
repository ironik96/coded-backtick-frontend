/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      blue:'#3383F9',
      white:'#FFFFFF',
      darkGray:'#2A2A2A',
      lightGray:'#F6F8FA',
      yellow:'#FDCA4B',
      green:'#1DAD91',
      softgray:'#ECF1F6',
      lightgreen:'rgba(29, 173, 145, 0.12)',
      viewgray:'rgba(0, 0, 0, 0.23)',
      coingray:'#869199',
    },
  },
  plugins: [],
}
