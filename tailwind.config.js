/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        glow: {
          cream: "#fffaf6",     
          amber: "#f4b183",     
          amberDark: "#e39a68", 
          sage: "#184d47",      
          brown: "#2b1b17",     
          clay: "#4b3d3d",      
        },
      },
      fontFamily: {
        sans: ["Poppins", "Inter", "sans-serif"], 
      },
    },
  },
  plugins: [],
};

