const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: false,
    port: 9000,
    open: true,
    hotOnly: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      { 
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      { 
        test: /\.css$/, 
        use: ["style-loader", "css-loader"] 
      },
    ],
  },
  resolve:{
    alias:{
      '@s': path.resolve(__dirname, 'structures/'),
      '@h': path.resolve(__dirname, 'helpers/'),
    }
  },
  plugins: [new HtmlWebpackPlugin()],
};
