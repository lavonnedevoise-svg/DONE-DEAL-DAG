/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          500: "#d4af37",
          600: "#b8932e"
        }
      },
      boxShadow: {
        glow: "0 0 60px rgba(212,175,55,0.15)"
      }
    }
  },
  plugins: []
};
