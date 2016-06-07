var webpack = require("webpack");
var config = require('./common');
var path= require('path');

module.exports= config({
  entry: ['webpack/hot/signal.js',
          './entryserver.js'],
  target: 'node',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'backend.js'
  },
  recordsPath: path.join(__dirname, 'build/_records'),
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.IgnorePlugin(/\.(css|less)$/),
    new webpack.BannerPlugin('require("source-map-support").install();',
                             { raw: true, entryOnly: false })
  ],
  devtool: 'sourcemap'
});
