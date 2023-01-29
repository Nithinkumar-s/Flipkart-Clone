/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      signature: ['Great Vibes'],
      placeholder: ['Raleway'],
      regular: ['Noto Sans'],
    },
    colors: {
      blue : ['rgb(40,116,240)'],
      white: ['rgb(255,255,255)'],
      darkblue:['rgb(40,116,240)'],
      lightdark:['hsl(0,5%,37.25%)'],
    },
  },
  plugins: [],
}
