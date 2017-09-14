var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');


module.exports = {
	context: __dirname, //+"/app"
	devtool: debug ? "inline-sourcemap" : null,
	entry: "./js/scripts.js",
	output: {
		path: __dirname + "/js",
		filename: "scripts.min.js"
	},
	plugins: debug ? [] : [
		new webpack.optimize.DeduperPlugin(), // Strip out duplicate code
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false}), // Making production ready
	],
};