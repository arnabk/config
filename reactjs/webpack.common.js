const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {

  pluginConfGenerator(destination) {
    return [
      new CopyWebpackPlugin([
        { from: path.join(__dirname, 'src', 'web', 'Main.html'), to: destination },
        { from: path.join(__dirname, 'src', 'web', 'sds', 'sds.html'), to: destination },
        {
          from: path.join(__dirname, 'node_modules', 'xlsx-style', 'dist', 'xlsx.full.min.js'),
          to: destination,
        },
      ]),
      new CleanWebpackPlugin(['./**'], {
        root: destination,
        verbose: true,
        dry: false,
      }),
      new webpack.NoEmitOnErrorsPlugin(),
    ];
  },

};
