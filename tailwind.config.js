module.exports = {
  content: [
    './components/**/*.jsx',
    './components/**/*.js',
    './pages/**/*.js',
    './pages/**/*.jsx',
    './layouts/**/*.js',
    './layouts/**/*.jsx',
    './data/blog/**/*.mdx',
  ],
  theme: {
    extend: {
      transitionProperty: {
        height: 'height',
        width: 'width',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            blockquote: {
              textAlign: 'center',
              borderLeftColor: '#d4d4d8',
              borderLeftWidth: '0.35rem',
              padding: '1rem',
              backgroundColor: '#f4f4f5',
              p: {
                color: '#27272a',
              },
            },
            a: {
              textUnderlineOffset: '2px',
              '--tw-prose-links': theme('colors.indigo[600]'),
            },
          },
        },
      }),
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
  ],
}
