//  @type {import('tailwindcss').Config} 


// export default {
//     content: [
//       "./index.html",
//       "./src/**/*.{vue,js,ts,jsx,tsx}",
//       "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
//       "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
//   ],  theme: {
//     extend: {},
//   },
//   plugins: [],

// }


const withMT = require("@material-tailwind/react/utils/withMT");
const { transform } = require("framer-motion");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        customFont: ['"News Cycle"', "sans-serif"],
        customFont2:["Passion One", 'sans-serif'],
        // Add more custom font families as needed
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
});

