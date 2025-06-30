/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        warm: {
          50: '#fdf8f3',
          100: '#faeee0',
          200: '#f5dcc1',
          300: '#eec399',
          400: '#e5a36f',
          500: '#dd8650',
          600: '#d06d44',
          700: '#ad5439',
          800: '#8c4533',
          900: '#723b2c',
        },
        accent: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        }
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'body': ['Inter', 'sans-serif'],
        'devanagari': ['Noto Sans Devanagari', 'sans-serif'],
        'serif': ['Crimson Text', 'serif'],
      },
      animation: {
        'spin-slow': 'spin 60s linear infinite',
      },
    },
  },
  plugins: [],
}