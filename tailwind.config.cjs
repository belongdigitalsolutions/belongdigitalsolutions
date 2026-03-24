/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ffffff",
        secondary: "#1f1f1f",
        accent: "#0d6efd",
        ink: "#0b0b0b",
        fog: "#f5f5f5"
      },
      fontFamily: {
        display: ["Space Grotesk", "system-ui", "sans-serif"],
        body: ["Sora", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glow: "0 20px 45px rgba(13, 110, 253, 0.25)",
        soft: "0 24px 60px rgba(20, 20, 20, 0.12)"
      }
    }
  },
  plugins: []
};
