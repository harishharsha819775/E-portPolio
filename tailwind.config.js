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
      colors: {
        neonPink: '#FF1493',
        hotPink: '#FF69B4',
        rosePink: '#FF66CC',
        lavender: '#D8B4FE',
        darkPurple: '#1A0826',
        deepPurple: '#0D0118',
        midPurple: '#2D0A4E',
      },
      fontFamily: {
        orbitron: ['Orbitron', 'monospace'],
        inter: ['Inter', 'sans-serif'],
        space: ['Space Grotesk', 'sans-serif'],
      },
      animation: {
        'pulse-pink': 'pulse-pink 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'rotate-slow': 'rotate-slow 20s linear infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'typing': 'typing 3s steps(30, end)',
        'blink': 'blink 1s step-end infinite',
        'slide-up': 'slide-up 0.6s ease-out',
        'slide-in-left': 'slide-in-left 0.6s ease-out',
        'slide-in-right': 'slide-in-right 0.6s ease-out',
        'orbit': 'orbit 15s linear infinite',
        'bounce-slow': 'bounce-slow 3s ease-in-out infinite',
        'counter': 'counter 2s ease-out forwards',
      },
      keyframes: {
        'pulse-pink': {
          '0%, 100%': { boxShadow: '0 0 20px #FF1493, 0 0 40px #FF1493, 0 0 80px #FF1493' },
          '50%': { boxShadow: '0 0 40px #FF1493, 0 0 80px #FF1493, 0 0 120px #FF1493' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'glow': {
          'from': { textShadow: '0 0 10px #FF1493, 0 0 20px #FF1493, 0 0 30px #FF1493' },
          'to': { textShadow: '0 0 20px #FF69B4, 0 0 40px #FF69B4, 0 0 60px #FF69B4' },
        },
        'rotate-slow': {
          'from': { transform: 'rotate(0deg)' },
          'to': { transform: 'rotate(360deg)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'typing': {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        'blink': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        'slide-up': {
          'from': { opacity: '0', transform: 'translateY(30px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in-left': {
          'from': { opacity: '0', transform: 'translateX(-30px)' },
          'to': { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-in-right': {
          'from': { opacity: '0', transform: 'translateX(30px)' },
          'to': { opacity: '1', transform: 'translateX(0)' },
        },
        'orbit': {
          'from': { transform: 'rotate(0deg) translateX(120px) rotate(0deg)' },
          'to': { transform: 'rotate(360deg) translateX(120px) rotate(-360deg)' },
        },
        'bounce-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'pink-gradient': 'linear-gradient(135deg, #FF1493, #FF69B4, #D8B4FE)',
        'dark-gradient': 'linear-gradient(180deg, #0D0118 0%, #1A0826 50%, #0D0118 100%)',
        'shimmer-gradient': 'linear-gradient(90deg, transparent 0%, rgba(255,20,147,0.3) 50%, transparent 100%)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
