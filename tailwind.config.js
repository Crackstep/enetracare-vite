// tailwind.config.js

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Fixed to include correct extensions
    "node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        header: ["Kalnia Glaze", 'serif'], // Use header for cursive
        body: ["Passion One", 'sans-serif'], // Use body for sans-serif
        footer: ["Passion One", 'serif'], // Use footer for serif if needed
        baseFont: ["Poppins", 'sans-serif']
      },
    },
  },
  plugins: [
    require('daisyui'), // Ensure you have this installed
  ],
});
