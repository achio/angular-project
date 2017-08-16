const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const BASE_PATH = __dirname;
const OUTPUT = "/build";
const ENTYY = "./src/";
const config = {
	target : "web",
	entry : {
		main : ENTYY + 'main.js'
	},
	output : {
		path : BASE_PATH + OUTPUT,
		filename : "[name].bundle.js"
	},
	module : {
		rules : [
			{
				test : /\.js$/,
				exclude : /node_modules/,
				loader : "babel-loader",
				query : {
					presets : ['es2015']
				}
			},
			{
				test : /\.css/,
				exclude : /node_modules/,
				use : [
					{
						loader : "style-loader"
					},
					{
						loader : "css-loader"
					}
				]
			}
		]
	},
	plugins : [
		new webpack.optimize.UglifyJsPlugin(),
    	new HtmlWebpackPlugin({template : './index.html'})
	]
};
module.exports = config;