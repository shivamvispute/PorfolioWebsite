/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    darkMode: 'class', // enables dark theme support
    theme: {
      extend: {
        fontFamily: {
          sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        },
        colors: {
          background: '#0f0f0f',
          foreground: '#f4f4f5',
          accent: '#6366f1', // indigo-500
          glow: '#9333ea'    // purple-600
        }
      },
    },
    plugins: [],
  };
  