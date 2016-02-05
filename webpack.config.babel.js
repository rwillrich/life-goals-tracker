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
      { test: /\.jsx?/, exclude: /node_modules/, loader: 'babel' }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Life Goals Tracker',
      template: 'src/index.ejs'
    })
  ]
}
