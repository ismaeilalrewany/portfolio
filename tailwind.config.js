/** @type {import('tailwindcss').Config} */
import tailwindScrollbar from 'tailwind-scrollbar';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "deep-night": "#1a1a2e",
        "dawn": "#243b55",
        "lighter-dawn": "#4a69bb",
        "morning-sky": "#7086d1",
        "morning-midday": "#8ea6e9",
        "peak-daylight": "#a7c5eb",
        "late-afternoon": "#9cb4d9",
        "sunset-beginning": "#8e94f2",
        "dusk": "#5c5d8d",
        "late-dusk": "#2d325a",
        "day-black": "#1a1a2e",
        "night-white": "#e8e8ff",
        
      },
      fontFamily: {
        Orbitron: ["Orbitron", "sans-serif"],
        NovaSquare: ["Nova Square", "sans-serif"],
        BrunoAceSC: ["Bruno Ace SC", "sans-serif"],
      },
      fontSize: {},
      keyframes: {
        smoke: {
          '0%': {
            transform: 'scale(0) translateY(0) translateX(0) rotate(0deg)',
            opacity: '0.4',
            filter: 'blur(8px)'
          },
          '50%': {
            transform: 'scale(0.8) translateY(-20px) translateX(10px) rotate(10deg)',
            opacity: '0.6',
            filter: 'blur(15px)'
          },
          '100%': {
            transform: 'scale(1) translateY(-40px) translateX(20px) rotate(20deg)',
            opacity: '0',
            filter: 'blur(20px)'
          },
        },
        rotate: {
          'from': { 
            transform: 'translate(-50%, -50%) rotate(0deg)' 
          },
          'to': { 
            transform: 'translate(-50%, -50%) rotate(360deg)' 
          }
        },
        twinkle: {
          'from': { 
            opacity: '0.3' 
          },
          'to': { 
            opacity: '1' 
          }
        },
        "pulse-slow": {
          '0%': {opacity: '0.95'},
          '50%': {opacity: '0.99'},
          '100%': {opacity: '0.95'},
        }
      },
      animation: {
        'smoke-1': 'smoke 4s cubic-bezier(0.4, 0, 0.2, 1) infinite backwards',
        'smoke-2': 'smoke 4s cubic-bezier(0.4, 0, 0.2, 1) infinite 1s backwards',
        'smoke-3': 'smoke 4s cubic-bezier(0.4, 0, 0.2, 1) infinite 2s backwards',
        'rotate': 'rotate 120s linear infinite',
        'twinkle': 'twinkle 2s infinite alternate',
        'pulse-slow': 'pulse-slow 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [tailwindScrollbar],
}