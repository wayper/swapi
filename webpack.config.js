const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    contentBase: './dist',
    port: 8000,
  },
  resolve: {
    extensions: [".js", ".json", ".jsx"],
  },
  module: {
    rules: [
       {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
       },
       {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'source-map-loader',
        },
       {
        test: /\.css$/,
        loader: "style-loader!css-loader"
    },
    ]
 },
};
