const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  webpack: (config, { dev: __DEV__ }) => {

    config.module.rules.push(
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              query: {
                modules: true,
                sourceMap: __DEV__,
                minimize: !__DEV__,
                importLoaders: 1,
                localIdentName: '[local]__[hash:base64:3]',
              }
            },
            {
              loader: 'postcss-loader'
            }
          ]
        })
      }
    )

    config.plugins.push(
      new ExtractTextPlugin({
        filename: (getPath) => {
          if (__DEV__) {
            return 'css/style.css';
          }

          const PATH = getPath('css/[name].css')
            .replace('.js', '')
            .replace('bundles/pages/', '');

          return PATH;
        },
        allChunks: true
      })
    )

    return config
  }
}
