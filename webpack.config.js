const webpack = require('webpack')

module.exports = {
  mode: 'production',
  entry: {
    app: ['./src/main.js']
  },
  output: {
    path: __dirname,
    filename: 'Player.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
}
