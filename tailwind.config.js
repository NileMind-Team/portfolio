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
        /*
         * Entry animations for above-the-fold content, in CSS rather than in JavaScript.
         * `backwards` fill is the whole point: it applies the `from` frame during the delay, so a
         * staggered element is styled by the animation itself and never needs an inline
         * `opacity: 0` baked into the HTML waiting for a script to lift it.
         */
        "hero-enter": "hero-enter 0.7s cubic-bezier(0.16, 1, 0.3, 1) backwards",
        "hero-rise": "hero-rise 0.6s cubic-bezier(0.16, 1, 0.3, 1) backwards",
      },
      keyframes: {
        "hero-enter": {
          from: { opacity: "0", transform: "translateY(14px)" },
          to: { opacity: "1", transform: "none" },
        },
        "hero-rise": {
          from: { opacity: "0", transform: "translateY(18px) scale(0.98)" },
          to: { opacity: "1", transform: "none" },
        },
      },
      screens: {
        xs: "375px",
        "3xl": "1920px",
      },
    },
  },
  plugins: [],
};
