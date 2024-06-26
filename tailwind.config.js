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
      // keyframes: {
      //   appear: {
      //     '0%': { opacity: '0',
      //             transform: 'translateX(200px)'
      //      },
      //     '100%': { opacity: '1',
      //             transform: 'translateX(0px)'
      //      }
      //   },
      // },
      // animation: {
      //   'text-appear': 'appear linear view()' 
      // }
    },
  },
  plugins: [
    require('daisyui'),
  ],
});

