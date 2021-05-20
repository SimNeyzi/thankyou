var path = require('path');
var DIST_DIR = path.join(__dirname, '/client/public');
var SRC_DIR = path.join(__dirname, '/client/src');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  module: {
    rules: [
      {
        test: [/\.jsx|js$/],
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['env', 'react'],
        }
      }
    ]
  }
};