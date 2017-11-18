const path = require('path');
const webpack = require("webpack");
const UglifyJS = require('uglifyjs-webpack-plugin');

const env = process.env.NODE_ENV || "dev";

const plugins = [];

if (env != "dev") {
  plugins.push(new webpack.optimize.UglifyJsPlugin({ compress: true }));
  plugins.push(new webpack.EnvironmentPlugin(["ROOT_URL"]));
}

module.exports = {
  entry: [
    'babel-polyfill',
    './src/index'
  ],
  devtool: 'cheap-module-source-map',
  output: {
    path: path.join(__dirname, 'public/build'),
    filename: 'bundle.min.js',
    publicPath: '/public/'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel-loader'],
      include: path.join(__dirname, 'src')
    }]
  },
  plugins,
  watch: env == "dev"
};