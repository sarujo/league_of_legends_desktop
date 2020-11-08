const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BabiliPlugin = require('babili-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// Any directories you will be adding code/files into, need to be added to this array so webpack will pick them up
const defaultInclude = path.resolve(__dirname, 'src');
module.exports = {
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
        include: defaultInclude,
      },
      {
        test: /\.(js|ts|tsx)$/,
        use: [{ loader: 'babel-loader' }],
        include: defaultInclude,
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        use: [{ loader: 'file-loader?name=img/[name]__[hash:base64:5].[ext]' }],
        include: defaultInclude,
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: [{ loader: 'file-loader?name=font/[name]__[hash:base64:5].[ext]' }],
        include: defaultInclude,
      },
    ],
  },
  target: 'electron-renderer',
  plugins: [
    new HtmlWebpackPlugin({ title: 'LOL APP' }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: 'bundle.css',
      chunkFilename: '[id].css',
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new BabiliPlugin(),
  ],
  stats: {
    colors: true,
    children: false,
    chunks: false,
    modules: false,
  },
};
