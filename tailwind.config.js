/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src//*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 🌿 Natural Glow brand palette
        glow: {
          cream: "#fffaf6",     // soft background cream
          amber: "#f4b183",     // warm amber accent
          amberDark: "#e39a68", // hover/deep tone
          sage: "#184d47",      // deep natural green
          brown: "#2b1b17",     // text/body color
          clay: "#4b3d3d",      // subtle supporting brown
        },
      },
      fontFamily: {
        sans: ["Poppins", "Inter", "sans-serif"], // modern & elegant font pairing
      },
    },
  },
  plugins: [],
};

