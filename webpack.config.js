module.exports = {
  cache: true,

  watch: true,

  entry: {
    'tracker': ['./js/tracker.js']
  },

  output: {
    filename: '[name].js'
  },

  devtool: 'inline-source-map',

  module: {
    loaders: [
      { test: /\.js$|\.jsx$/, exclude: /node_modules|build/, loader: 'babel-loader'}
    ]
  },

  resolve: {
    root: __dirname,
    alias: {
    },
    extensions: ['', '.js', '.jsx']
  }
};
