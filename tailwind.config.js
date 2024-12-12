/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        IBMPlexMono: ["IBM PLex Mono", "sans-serif"],
        Ubuntu: ["Ubuntu", "sans-serif"],
      },
      colors: {
        BG1: "#292F36",
        BG2: "#1A1E23",
        Brand1: "#12F7D6",
        Brand2: "#98FAEC",
        Grey: "#43454D",
        White: "#FFFFFF",
        Html: "#E54F26",
        CSS: "#0C73B8",
        JS: "#E7A020",
        React: "#28A9E0",
      },
    },
  },
  plugins: [],
};
