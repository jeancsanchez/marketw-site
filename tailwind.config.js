/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#102033",
        slateLine: "#dbe3ec",
        trust: "#145e8c",
        success: "#2f8f63",
      },
      boxShadow: {
        soft: "0 18px 55px rgba(16, 32, 51, 0.10)",
      },
    },
  },
  plugins: [],
};
