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
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
