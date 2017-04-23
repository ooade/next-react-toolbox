const reactToolboxVariables = {
  'color-text': '#444548',
  /* Note that you can use global colors and variables */
  'color-primary': 'var(--palette-blue-300)',
  '--color-primary-dark': 'var(--palette-green-700)', /*AppBar*/
  'button-height': '30px',
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
