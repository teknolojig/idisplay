import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f4f8',
          100: '#d9e5f0',
          200: '#b3cbe1',
          300: '#8db1d2',
          400: '#6797c3',
          500: '#236093', // Ana renk
          600: '#1c4d76',
          700: '#153a59',
          800: '#0e263c',
          900: '#07131f',
          950: '#040a10',
        },
      },
      animation: {
        'marquee-left': 'marquee-left 20s linear infinite',
        'marquee-right': 'marquee-right 20s linear infinite',
      },
      keyframes: {
        'marquee-left': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-right': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
