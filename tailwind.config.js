const { spacing } = require('tailwindcss/defaultTheme')

module.exports = {
  // mode: 'jit',
  purge: [
    './components/**/*.jsx',
    './components/**/*.js',
    './pages/**/*.js',
    './pages/**/*.jsx',
    './layouts/**/*.js',
    './layouts/**/*.jsx',
    './data/blog/**/*.mdx',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'outer-space': {
          50: '#f4f4f5',
          100: '#e9eaea',
          200: '#c9cacb',
          300: '#a9aaac',
          400: '#686b6e',
          500: '#272b30',
          600: '#23272b',
          700: '#1d2024',
          800: '#171a1d',
          900: '#131518',
        },
      },
      transitionProperty: {
        height: 'height',
        width: 'width',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            blockquote: {
              textAlign: 'center',
              borderLeftColor: '#377ebd',
              borderLeftWidth: '0.35rem',
              background: '#e0e0e0',
              padding: '1rem',
              p: {
                color: '#4B4B4B',
              },
            },
          },
        },
      }),
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')],
}
