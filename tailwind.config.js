/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0eb582",
        lightPrimary: "#f0fdfa",
        lightColor: "#777",
        lightWhite: "#eee",
        dimBlack: "#444",
        white: "#fff"
      },
      fontFamily: {
        grotesk: ["'Space Grotesk', sans-serif"]
      },
      spacing: {
        '3.6': '15px',
        '4.5': '17px',
        '7.5': '30px',
      }
    },
  },
  plugins: [],
}
