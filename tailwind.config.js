/** @type {import('tailwindcss').Config} */
import tailwindScrollbar from 'tailwind-scrollbar';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {},
      fontFamily: {
        Orbitron: ["Orbitron", "sans-serif"],
        NovaSquare: ["Nova Square", "sans-serif"],
        BrunoAceSC: ["Bruno Ace SC", "sans-serif"],
      },
      fontSize: {},
    },
  },
  plugins: [tailwindScrollbar],
}