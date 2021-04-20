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
        dark: {
          css: {
            color: theme('colors.gray.300'),
            h2: {
              color: theme('colors.gray.100'),
            },
            'h3,h4': {
              color: theme('colors.gray.100'),
            },
            blockquote: {
              textAlign: 'center',
              borderLeftColor: theme('colors.blue.500'),
              borderLeftWidth: '0.35rem',
              background: theme('colors.outer-space.600'),
              padding: '1rem',
              p: {
                color: theme('colors.white'),
              },
              color: theme('colors.gray.300'),
            },
            hr: { borderColor: theme('colors.gray.700') },
            ol: {
              li: {
                '&:before': { color: theme('colors.gray.500') },
              },
            },
            ul: {
              li: {
                '&:before': { backgroundColor: theme('colors.gray.500') },
              },
            },
            strong: { color: theme('colors.gray.300') },
            thead: {
              color: theme('colors.gray.100'),
            },
            tbody: {
              tr: {
                borderBottomColor: theme('colors.gray.700'),
              },
            },
          },
        },
      }),
    },
  },
  variants: {
    typography: ['dark'],
  },
  plugins: [require('@tailwindcss/typography')],
}
