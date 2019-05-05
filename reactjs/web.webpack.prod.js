/**
 * Created by Arnab Karmakar on 6/16/16.
 */
var path                = require('path');
var webpack             = require('webpack');
var WebpackStrip        = require('strip-loader');
var devConf             = require('./web.webpack.core');

devConf.module.loaders.push({
    test: /(\.js$|\.jsx$)/,
    loader: WebpackStrip.loader('console.log'),
    include: [
        path.resolve(__dirname, 'src')
    ]
});

// This plugins optimizes chunks and modules by
// how much they are used in your app
devConf.plugins.push(new (webpack.optimize.OccurenceOrderPlugin || webpack.optimize.OccurrenceOrderPlugin)());

// This plugin prevents Webpack from creating chunks
// that would be too small to be worth loading separately
devConf.plugins.push(new webpack.optimize.MinChunkSizePlugin({
    minChunkSize: 51200, // ~50kb
}));

// This plugin minifies all the Javascript code of the final bundle
devConf.plugins.push(new webpack.optimize.UglifyJsPlugin({
    mangle: true,
    compress: {
        warnings: false, // Suppress uglification warnings
        screw_ie8: true,
    },
    output: {
        comments: false,
    },
    exclude: [/\.min\.js$/gi] // skip pre-minified libs
}));

devConf.plugins.push(new webpack.optimize.AggressiveMergingPlugin());
devConf.plugins.push(new webpack.DefinePlugin({
    "process.env": {
        NODE_ENV: JSON.stringify("production")
    }
}));

devConf.devtool = false;

module.exports = devConf;
