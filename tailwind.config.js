module.exports = {
  purge: ['./components/**/*.js', './pages/**/*.js'],
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
              borderLeftColor: '#CA5454',
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
