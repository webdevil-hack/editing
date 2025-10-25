/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#9b87f5',
        accent: '#00e5ff',
      },
      boxShadow: {
        glow: '0 0 20px rgba(155,135,245,0.5)',
      },
    },
  },
  plugins: [],
};