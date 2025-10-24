/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#0b0b0e',
        surface: '#111118',
        accent: '#6EE7F2',
        accent2: '#A78BFA',
      },
      boxShadow: {
        glow: '0 0 30px rgba(110, 231, 242, 0.35)',
      },
    },
  },
  plugins: [],
};