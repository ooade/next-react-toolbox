const reactToolboxVariables = {
  'color-text': '#444548',
  /* Note that you can use global colors and variables */
  'color-primary': 'var(--palette-blue-500)',
  'color-primary-dark': 'var(--palette-blue-900)', /*AppBar*/
  'preferred-font': 'Lato, Helvetica, Arial, sans-serif',
};

module.exports = {
  plugins: [
    require('postcss-cssnext')({
      features: {
        customProperties: {
          variables: reactToolboxVariables,
        },
      },
    }),
  ]
}
