/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  darkMode: "class", // تمكين الدارك مود بالكلاس
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#1DC7E0",
          DEFAULT: "#21A5D4",
          dark: "#1E6DB2",
          darker: "#193F94",
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
        sans: ["Inter", "system-ui", "sans-serif"],
        heading: ["Poppins", "Inter", "sans-serif"],
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
