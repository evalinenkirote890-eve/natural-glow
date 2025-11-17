/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#A45733",       // brand primary (warm)
        secondary: "#0F7A74",     // brand secondary (teal)
        accent: "#F0635C",        // CTA accent
        neutralDark: "#0f1724",   // text
        neutralLight: "#f8fafc"   // backgrounds
      },
      spacing: {
        // px -> rem (16px base) keys use direct px-[N] usage in components
        "figma-8": "0.5rem",   // 8px
        "figma-16": "1rem",    // 16px
        "figma-24": "1.5rem",  // 24px
        "figma-30": "1.875rem",// 30px
        "figma-32": "2rem",    // 32px
        "figma-40": "2.5rem",  // 40px
        "figma-48": "3rem",    // 48px
        "figma-60": "3.75rem", // 60px
        "figma-80": "5rem",    // 80px
        "figma-120":"7.5rem"   // 120px
      },
      fontFamily: {
        display: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"]
      },
      maxWidth: {
        "container-xl": "1180px"
      }
    },
  },
  plugins: [],
};
