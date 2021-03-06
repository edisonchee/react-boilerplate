const { resolve } = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  entry: [resolve(__dirname, 'src/index')],
  output: {
    filename: '[name].[hash].js',
    path: resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  resolve: {
    extensions: [ '.ts', '.tsx', '.js' ],
    alias: {
      'react-dom': '@hot-loader/react-dom'
    }
  },
  module: {
    rules: [
      { 
        test: /\.(ts|js)x?$/, 
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
          plugins: ['react-hot-loader/babel'],
        },
        exclude: /node_modules/ 
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "React Boilerplate",
      template: resolve(__dirname, 'src/static/index.html'),
    }),

    new ForkTsCheckerWebpackPlugin()
  ]
}
