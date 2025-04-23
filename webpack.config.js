const path = require('path');

module.exports = {
  entry: './index.js', // adjust if your main JS file is in another location
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  target: 'node', // since you're using express, this makes sure Node.js modules work
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader' // optional, remove if you’re not using Babel
      }
    ]
  }
};
