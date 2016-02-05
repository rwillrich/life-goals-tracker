export default {
  entry: './src/client',
  output: {
    path: `./build`,
    filename: 'client.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      { test: /\.jsx?/, exclude: /node_modules/, loader: 'babel' }
    ]
  }
}
