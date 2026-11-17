/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-space)', 'monospace'],
      },
      colors: {
        brand: {
          dark: '#08090D',
          surface: '#0F1118',
          card: '#161923',
          border: '#242A38',
          accent: '#FF5E1E',
          accentGlow: 'rgba(255, 94, 30, 0.25)',
          cyan: '#00E5FF',
          cyanGlow: 'rgba(0, 229, 255, 0.2)',
          muted: '#8A94A6'
        }
      }
    }
  },
  plugins: [],
}
