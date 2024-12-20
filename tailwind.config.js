/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        slideIn: {
          "0%": {
            opacity: 0, transform: "translateX(0) translateY(20px)",
          },
          "100%": { opacity: 1, transform: "translateX(0) translateY(0px)" }
        }
      },
      animation: {
        slideIn: "slideIn 2s ease-in-out "
      }
    },
  },
  plugins: [],
};
