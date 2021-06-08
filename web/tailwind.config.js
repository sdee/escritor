module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            figure: {
              marginTop: '0',
              marginBottom: '0',
              paddingTop: '0',
              paddingBottom: '0',
            },
            'figure > *': {
              marginTop: '0',
              marginBottom: '0',
              paddingTop: '0',
              paddingBottom: '0'
            },
          },
        },
          "lg": {
            css: {
              figure: {
                marginTop: '0',
                marginBottom: '0',
                paddingTop: '0',
                paddingBottom: '0',
              },
              'figure > *': {
                marginTop: '0',
                marginBottom: '0',
                paddingTop: '0',
                paddingBottom: '0'
              },
            },
          },

    }),
  },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/aspect-ratio')],
}
