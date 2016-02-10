import HtmlWebpackPlugin from 'html-webpack-plugin'

export default {
  entry: './src/client',
  output: {
    path: './build',
    publicPath: '/',
    filename: 'client.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      { test: /\.jsx?/, exclude: /node_modules/, loader: 'babel' },
      {
        test: /\.css/,
        loader: 'style!' +
          'css?modules&localIdentName=[name]__[local]___[hash:base64:5]' +
          'postcss'
      }
    ]
  },
  postcss(webpack) {
    return [
      require('postcss-import')({ addDependencyTo: webpack }),
      require('postcss-url')(),
      require('postcss-cssnext')(),
      require('postcss-reporter')()
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Life Goals Tracker',
      template: './src/templates/index.ejs'
    })
  ]
}
