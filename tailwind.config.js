/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customPink: "#FFB64CAD",
        customGreen: "#052e16",
      },
    },  },
  plugins: [],
}