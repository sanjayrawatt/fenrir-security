/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0CC8A8",
          dark: "#0AA88C",
          light: "#2DD4BF",
        },
        severity: {
          critical: "#EF4444",
          high: "#F97316",
          medium: "#EAB308",
          low: "#22C55E",
        },
        dark: {
          bg: "#0F0F0F",
          surface: "#1A1A1A",
          border: "#2A2A2A",
          hover: "#252525",
        },
        light: {
          bg: "#FFFFFF",
          surface: "#F5F5F5",
          border: "#E5E5E5",
          hover: "#EBEBEB",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
