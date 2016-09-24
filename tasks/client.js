let path = require('path'),
	fs = require('fs');

let Webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let PreCSS = require('precss');
let PostCSSImport = require('postcss-import');
let Autoprefixer = require('autoprefixer');

const DIR_NAME = path.join(__dirname, '..');

module.exports = {
	entry: [
		'./views/index.jsx'
	],

	output: {
		path    : `${DIR_NAME}/cache`,
		filename: 'build.js',
	},

	resolve: {
		extensions: ['', '.js', '.jsx']
	},

	// devtool: 'source-map',
	// target : 'web',

	plugins: [
		new Webpack.optimize.OccurenceOrderPlugin(),
		new Webpack.optimize.DedupePlugin(),

		new Webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify("production")
			}
		}),

		new Webpack.optimize.UglifyJsPlugin({
			compressor: {
				warnings: false
			}
		})
	],

	module: {
		loaders: [
			{
				test   : /\.(js|jsx)$/,
				loaders: ['babel'],
				include: `${DIR_NAME}/views`
			},

			{
				test   : /\.css$/,
				loaders: ['style', 'css', 'postcss']
			},

			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				loader: 'file-loader'
			}
		]
	},

	postcss (Webpack) {
		return [
			PreCSS,
			Autoprefixer,
			PostCSSImport({
				addDependencyTo: Webpack
			})
		];
	}
};
