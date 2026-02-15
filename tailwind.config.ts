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
          950: '#060a14',
          900: '#0a0e1a',
          800: '#0f172a',
          700: '#1a1f3a',
          600: '#1e293b',
        },
        accent: {
          cyan: '#00ffd5',
          red: '#f43f5e',
          amber: '#fbbf24',
          green: '#22c55e',
          purple: '#a855f7',
        },
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'glitch': 'glitch 4s infinite',
        'blink': 'blink 1s step-end infinite',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'pulse-dot': 'pulseDot 2s ease-in-out infinite',
      },
      keyframes: {
        glitch: {
          '0%': { clipPath: 'inset(40% 0 61% 0)', transform: 'translate(0)' },
          '2%': { clipPath: 'inset(98% 0 1% 0)', transform: 'translate(-2px)' },
          '4%': { clipPath: 'inset(33% 0 30% 0)', transform: 'translate(2px)' },
          '6%': { clipPath: 'inset(10% 0 85% 0)', transform: 'translate(-1px)' },
          '8%': { clipPath: 'inset(50% 0 30% 0)', transform: 'translate(1px)' },
          '10%': { clipPath: 'inset(0)', transform: 'translate(0)' },
          '100%': { clipPath: 'inset(0)', transform: 'translate(0)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseDot: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(1.5)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
