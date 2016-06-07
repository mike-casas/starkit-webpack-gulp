var webpack = require("webpack");
var config = require('./common');
var path= require('path');

var frontendConfig = config({
  devServer: {
       hot: true
  },
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './entry.js'],
  output: {
    path: path.join(__dirname, 'static/build'),
    publicPath: 'http://localhost:3000/build',
    filename: 'bundle.js'
  },
	module:{
		loaders:[
			{test: /\.css$/,
			 loader: "style!css"
			}
		]
	},
	plugins: [
    new webpack.HotModuleReplacementPlugin({ quiet: true })
	]
});

module.exports= frontendConfig;
