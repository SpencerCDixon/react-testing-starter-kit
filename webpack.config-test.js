var path = require('path');
var nodeExternals = require('webpack-node-externals');

module.exports = {
  target: 'node', // ignore built-in modules like path, fs, etc.
  externals: [nodeExternals()], // ignore node_modules folder content
  module: {
    loaders: [
      {
        test: /\.js?$/,
        // don't run node_modules or bower_components through babel loader
        exclude: /(node_modules|bower_components)/,
        // babel is alias for babel-loader
        // npm i babel-core babel-loader --save-dev
        loader: 'babel'
      }
    ],
  },
  resolve: {
    root: [
      // allows us to import modules as if /src was the root.
      // so I can do: import Comment from 'components/Comment'
      // instead of:  import Comment from '../components/Comment' or whatever relative path would be
      path.resolve(__dirname, './src')
    ],
    // allows you to require without the .js at end of filenames
    // import Component from 'component' vs. import Component from 'component.js'
    extensions: ['', '.js', '.json', '.jsx']
  }
};
