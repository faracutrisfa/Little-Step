/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['"Nunito"', "sans-serif"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
        screens: {
          sm: "600px",
          md: "768px",
          lg: "1024px",
          xl: "1240px",
          "2xl": "1440px",
        },
      },

      colors: {
        primary: {
          0: "#094E70",
          10: "#F3FAFF",
          30: "#EDF7FF",
          50: "#8ACCF",
          70: "#6EA3CC",
          90: "#304759",
        },
        secondary: {
          10: "#FDF2F0",
          30: "#F8D5CF",
          50: "#E87864",
          70: "#BA6050",
          90: "#512A23",
        },
        neutral: {
          0: "#2C2C2C",
          10: "#E2E2E2",
          30: "#DDDDDD",
          50: "#8F8F8F",
          70: "#6D6D6D",
          90: "#5A5A5A",
        },
        success: {
          10: "#DFFFE0",
          30: "#CBFFCD",
          50: "#9CF4A0",
          70: "#67E06B",
          90: "#126A16",
        },
        warning: {
          10: "#FFAA6D",
          30: "#FFA05A",
          50: "#FF9548",
          70: "#E68641",
          90: "#CC773A",
        },
        error: {
          10: "#FFD0D0",
          30: "#FF7676",
          50: "#FF6767",
          70: "#E65D5D",
          90: "#CC5252",
        },
      },
    },
  },
  plugins: [],
};
