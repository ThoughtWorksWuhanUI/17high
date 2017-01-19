var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
	entry: APP_DIR + '/index.jsx',
	output: {
		path: BUILD_DIR,
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.jsx?/,
				include: APP_DIR,
				loader: 'babel'
			},
			{
				test: /\.scss$/,
				loaders: ["style-loader", "css-loader", "postcss-loader", "sass-loader"]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'src/index.html'
		})
	]
};

module.exports = config;