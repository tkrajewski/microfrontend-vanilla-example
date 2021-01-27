const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');
 
 module.exports = {
   entry: './src/index.js',
   mode: 'production',
   output: {
     filename: 'shell.js',
     path: path.resolve(__dirname, 'dist'),
   },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      }
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
  ]
 };