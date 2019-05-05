/**
 * Created by WYK46451 on 2/9/16.
 */
var path                = require('path');
var conf                = require('./web.webpack.core');
var pick                = require('lodash/pick');
var CleanWebpackPlugin  = require('clean-webpack-plugin');
var CopyWebpackPlugin   = require('copy-webpack-plugin');

var destination = path.join(__dirname, 'dist');

conf.output.path = destination;

conf.entry = pick(conf.entry, ['Worker']);
conf.entry.sds = [
    'babel-polyfill', 'whatwg-fetch',
    path.join(__dirname, 'src', 'cd', 'sds.js')
];
conf.entry.coreUtilsWrapper = [
    'babel-polyfill',
    path.join(__dirname, 'src', 'cd', 'core_utils_wrapper.js')
];

conf.plugins = [
    new CopyWebpackPlugin([
        { from: path.join(__dirname, 'src', 'web', 'sds', 'sds.html'), to: destination },
        {
            from: path.join(__dirname, 'node_modules', 'xlsx-style', 'dist', 'xlsx.full.min.js'),
            to: destination
        },
    ]),
    new CleanWebpackPlugin(['./**'], {
        root: destination,
        verbose: true,
        dry: false
    })
];

module.exports = conf;
