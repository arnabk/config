/**
 * Created by Arnab Karmakar on 6/16/16.
 */
const path = require('path');
const trim = require('lodash/trim');
const pluginConfGenerator = require('./webpack.common.js').pluginConfGenerator;
const autoprefixer = require('autoprefixer');

const distFolder = path.join(trim(process.env.DISTRIBUTION_FOLDER || 'dist'));
console.log(`Compiling to [${distFolder}]`);

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: {
    Main: ['babel-polyfill', 'whatwg-fetch', path.join(__dirname, 'src', 'web', 'Main.js')],
    Worker: ['babel-polyfill', path.join(__dirname, 'src', 'common', 'Worker', 'Worker.js')],
    sds: ['babel-polyfill', 'whatwg-fetch', path.join(__dirname, 'src', 'web', 'sds', 'sds.js')],
  },
  output: {
    path: distFolder,
    filename: '[name].js',
  },
  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      loader: 'babel-loader',
      include: [path.resolve(__dirname, 'src')],
      exclude: /node_modules/,
    },
    {
      test: /\.(js|jsx)$/,
      loader: 'eslint-loader',
      include: path.resolve(__dirname, 'src'),
      exclude: [
        // all code under 'cd' folder should be linted independently
        path.resolve(__dirname, 'src', 'cd'),
        // TODO all the following should be removed
        path.resolve(__dirname, 'src', 'components'),
        path.resolve(__dirname, 'src', 'web', 'sds'),
        path.resolve(__dirname, 'src', 'web', 'InventorySearch'),
        path.resolve(__dirname, 'src', 'web', 'TurnIn'),
      ],
    },
    {
      test: /\.(css|scss)$/,
      use: [{
        loader: 'style-loader',
      }, {
        loader: 'css-loader',
        options: {
          camelCase: true,
          importLoaders: 1,
          localIdentName: '[name]__[local]___[hash:base64:5]',
        },
      }, {
        loader: 'postcss-loader',
        options: {
          plugins: () => [autoprefixer()],
        },
      }, {
        loader: 'sass-loader',
      }],
    },
    {
      test: /\.(png|gif)$/,
      loader: 'file-loader',
    }],
    noParse: [/localforage.js/], // Ignore warnings from this dependency
  },
  plugins: pluginConfGenerator(distFolder),
  stats: {
    // Nice colored output
    colors: true,
  },
  // Create Sourcemaps for the bundle
  devtool: 'source-map',
  node: {
    child_process: 'empty',
    fs: 'empty',
  },
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['.js', '.html', '.scss'],
  },
};
