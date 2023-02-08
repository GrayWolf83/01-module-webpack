const CopyPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

module.exports = {
	context: path.resolve(__dirname, 'src'),
	entry: './index.js',
	output: {
		filename: '[name].[contenthash].js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
	},
	resolve: {
		alias: {
			'@public': path.resolve(__dirname, 'public'),
			'@app': path.resolve(__dirname, 'src/1.app'),
			'@processes': path.resolve(__dirname, 'src/2.processes'),
			'@pages': path.resolve(__dirname, 'src/3.pages'),
			'@modules': path.resolve(__dirname, 'src/4.modules'),
			'@features': path.resolve(__dirname, 'src/5.features'),
			'@entities': path.resolve(__dirname, 'src/6.entities'),
			'@shared': path.resolve(__dirname, 'src/7.shared'),
		},
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'public/index.html'),
		}),
		new CopyPlugin({
			patterns: [
				{
					from: path.resolve(__dirname, 'public/favicon.png'),
					to: path.resolve(__dirname, 'dist'),
				},
			],
		}),
		new MiniCssExtractPlugin(),
	],
	module: {
		rules: [
			{
				test: /\.(scss|css)$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'postcss-loader',
					'sass-loader',
				],
			},
			{
				test: /\.(png|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
				generator: {
					filename: path.join(
						'assets/images',
						'[name].[contenthash][ext]',
					),
				},
			},
			{
				test: /\.svg$/,
				type: 'asset/resource',
				generator: {
					filename: path.join(
						'assets/icons',
						'[name].[contenthash][ext]',
					),
				},
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: 'asset/resource',
				generator: {
					filename: path.join(
						'assets/fonts',
						'[name].[contenthash][ext]',
					),
				},
			},
			{
				test: /\.(mp3)$/i,
				type: 'asset/resource',
				generator: {
					filename: path.join(
						'assets/sounds',
						'[name].[contenthash][ext]',
					),
				},
			},
		],
	},
}
