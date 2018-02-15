const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
      libraryTarget: 'umd',
      library: 'markEventsAssPassive',
      umdNamedDefine: true
  },
  resolve: {
    extensions: ['.js']
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
          loader: 'babel-loader',
          query: {
              presets: ['es2015']
          }
      }
    ]
  }
};