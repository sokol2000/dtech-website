/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Brand kit ufficiale D-Tech Studios
        orange: {
          DEFAULT: '#ff5100',
          400: '#ff7433',
          500: '#ff5100',
          600: '#e04600',
        },
        ink: {
          DEFAULT: '#1e1e1e',
          950: '#0d0d0d', // near-black cinema
          900: '#141414',
          800: '#1e1e1e',
          700: '#2a2a2a',
        },
      },
      fontFamily: {
        // Codec Pro (brand) con fallback geometrici free
        display: ['"Codec Pro"', 'Poppins', 'system-ui', 'sans-serif'],
        sans: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        container: '1920px',
      },
      boxShadow: {
        glow: '0 0 40px -8px rgba(255, 81, 0, 0.55)',
        'glow-lg': '0 0 80px -10px rgba(255, 81, 0, 0.5)',
      },
      keyframes: {
        'grain': {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '10%': { transform: 'translate(-5%, -10%)' },
          '30%': { transform: 'translate(3%, -15%)' },
          '50%': { transform: 'translate(-7%, 5%)' },
          '70%': { transform: 'translate(5%, 8%)' },
          '90%': { transform: 'translate(-3%, 3%)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 30px -10px rgba(255,81,0,0.6)' },
          '50%': { boxShadow: '0 0 55px -6px rgba(255,81,0,0.85)' },
        },
        'marquee': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        grain: 'grain 8s steps(6) infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        marquee: 'marquee 30s linear infinite',
      },
    },
  },
  plugins: [],
}
