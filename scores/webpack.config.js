const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');
 
 module.exports = {
   entry: './src/index.js',
   mode: 'production',
   output: {
     filename: 'scores.js',
     path: path.resolve(__dirname, 'dist'),
   },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
  ]
 };