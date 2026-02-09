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
        bg: 'rgba(var(--bg), <alpha-value>)',
        surface: 'rgba(var(--surface), <alpha-value>)',
        ink: 'rgba(var(--ink), <alpha-value>)',
        muted: 'rgba(var(--muted), <alpha-value>)',
        border: 'rgba(var(--border), <alpha-value>)',
        gold: 'rgba(var(--gold), <alpha-value>)',
        gold2: 'rgba(var(--gold2), <alpha-value>)',
        maroon: 'rgba(var(--maroon), <alpha-value>)',
        indigo: 'rgba(var(--indigo), <alpha-value>)',
      },
      fontFamily: {
        display: ['var(--font-display)', 'ui-serif', 'Georgia', 'serif'],
        body: ['var(--font-body)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        paper: '0 18px 50px rgba(27, 20, 15, 0.14)',
        float: '0 12px 30px rgba(27, 20, 15, 0.16)',
        gilded: '0 0 0 1px rgba(185, 138, 46, 0.28), 0 18px 50px rgba(27, 20, 15, 0.12)',
      },
      backgroundImage: {
        jali: "url('/patterns/jali.svg')",
      },
      keyframes: {
        'soft-float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-40%)' },
          '100%': { transform: 'translateX(140%)' },
        },
      },
      animation: {
        'soft-float': 'soft-float 10s ease-in-out infinite',
        shimmer: 'shimmer 2.2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
