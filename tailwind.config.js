module.exports = {
  purge: [
    './components/**/*.jsx',
    './components/**/*.js',
    './pages/**/*.js',
    './layouts/**/*.js',
    './layouts/**/*.jsx',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'dark-0': '#282828',
        'dark-1': '#2c2c2c',
        'dark-2': '#353535',
        'dark-3': '#323232',
      },
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
        dark: {},
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
