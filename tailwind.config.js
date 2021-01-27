module.exports = {
  purge: [
    './components/**/*.jsx',
    './components/**/*.js',
    './pages/**/*.js',
    './layouts/**/*.js',
    './layouts/**/*.jsx',
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            a: {
              color: '#3182ce',
              '&:hover': {
                color: '#2c5282',
              },
            },
            blockquote: {
              borderLeftColor: '#377ebd',
              borderLeftWidth: '0.3rem',
              background: '#F1F1F1',
              padding: '1rem',
              p: {
                color: '#4B4B4B',
              },
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
