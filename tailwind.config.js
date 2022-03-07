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
