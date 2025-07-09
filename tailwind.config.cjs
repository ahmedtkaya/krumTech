/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    "bg-pink-100", "text-pink-800",
    "bg-green-100", "text-green-800",
    "bg-yellow-100", "text-yellow-800",
    "bg-blue-100", "text-blue-800"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
});
