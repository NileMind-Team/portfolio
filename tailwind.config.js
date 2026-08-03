/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#5EEAD4",
          DEFAULT: "#14B8A6",
          dark: "#0F766E",
          darker: "#134E4A",
        },
        dark: {
          DEFAULT: "#0f172a",
          light: "#1e293b",
          lighter: "#334155",
          card: "#1e293b",
          text: "#e2e8f0",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        heading: ["var(--font-poppins)", "Poppins", "Inter", "sans-serif"],
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "gradient-x": "gradient-x 15s ease infinite",
        "pulse-slow": "pulse 3s ease-in-out infinite",
        "spin-slow": "spin 3s linear infinite",
      },
      screens: {
        xs: "375px",
        "3xl": "1920px",
      },
    },
  },
  plugins: [],
};
