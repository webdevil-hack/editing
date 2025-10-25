/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#9b87f5',
        accent: '#00e5ff',
        surface: '#1a1a2e',
      },
      boxShadow: {
        glow: '0 0 20px rgba(155,135,245,0.5)',
        'glow-lg': '0 0 40px rgba(155,135,245,0.6)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'cinematic-gradient': 'linear-gradient(135deg, #0a0a0f 0%, #1a0a2e 50%, #16213e 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 3s ease infinite',
      },
    },
  },
  plugins: [],
};