/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
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
        grotesk: ["'Space Grotesk', sans-serif"],
        russsoOne: ["'Russo One', sans-serif"],
      },
      spacing: {
        '3.6': '15px',
        '4.5': '17px',
        '7.5': '30px',
      },
      fontSize: {
        md: '15px'
      }
    },
  },
},
plugins: [],
}

