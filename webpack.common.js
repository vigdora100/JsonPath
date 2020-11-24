const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const merge = require('webpack-merge');
const common = require('./webpack.common.js');
module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: { app: ['babel-polyfill', './src/index.js'] },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  devServer: { contentBase: path.resolve(__dirname, 'dist') },
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' }),
  ],
});


module.exports = {
  resolve: { extensions: ['.js', '.jsx'] },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        exclude: /\.module\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
      },
      {
        test: /\.module\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader', options: { modules: true, camelCase: true } }
        ]
      },

      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/,
        use: 'file-loader'
      },
    ]
  },
  plugins: [new CleanWebpackPlugin(['dist']),new HtmlWebpackPlugin({ template: './src/index.html' })],
};
