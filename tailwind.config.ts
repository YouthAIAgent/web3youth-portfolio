import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#0a0e1a',
          800: '#0f172a',
          700: '#1a1f3a',
          600: '#1e293b',
        },
        neon: {
          cyan: '#00ffd5',
          magenta: '#ff00ff',
          pink: '#f472b6',
          amber: '#fbbf24',
          lime: '#84cc16',
          green: '#22c55e',
        },
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'glitch': 'glitch 3s infinite',
        'scanline': 'scanline 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'border-flow': 'border-flow 3s linear infinite',
        'typing': 'typing 3.5s steps(40, end)',
        'blink': 'blink 1s step-end infinite',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'count-up': 'countUp 2s ease-out forwards',
        'matrix-fall': 'matrixFall 10s linear infinite',
      },
      keyframes: {
        glow: {
          '0%': { textShadow: '0 0 5px currentColor, 0 0 10px currentColor, 0 0 20px currentColor' },
          '100%': { textShadow: '0 0 10px currentColor, 0 0 20px currentColor, 0 0 40px currentColor, 0 0 80px currentColor' },
        },
        glitch: {
          '0%': { clipPath: 'inset(40% 0 61% 0)', transform: 'translate(0)' },
          '2%': { clipPath: 'inset(98% 0 1% 0)', transform: 'translate(-2px)' },
          '4%': { clipPath: 'inset(33% 0 30% 0)', transform: 'translate(2px)' },
          '6%': { clipPath: 'inset(10% 0 85% 0)', transform: 'translate(-1px)' },
          '8%': { clipPath: 'inset(50% 0 30% 0)', transform: 'translate(1px)' },
          '10%': { clipPath: 'inset(0)' , transform: 'translate(0)' },
          '100%': { clipPath: 'inset(0)', transform: 'translate(0)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'border-flow': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        typing: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        matrixFall: {
          '0%': { transform: 'translateY(-100vh)', opacity: '1' },
          '75%': { opacity: '1' },
          '100%': { transform: 'translateY(100vh)', opacity: '0' },
        },
      },
      backgroundSize: {
        '300%': '300% 300%',
      },
    },
  },
  plugins: [],
}

export default config
