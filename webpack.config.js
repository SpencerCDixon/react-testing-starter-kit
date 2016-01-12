var webpack = require('webpack');
var path = require('path');

// Speed up re-bundling time by giving explicit path to expensive libraries
var node_modules = path.resolve(__dirname, 'node_modules');
var pathToReact = path.resolve(node_modules, 'react/dist/react.min.js');
var pathToReactDOM = path.resolve(node_modules, 'react-dom/dist/react-dom.min.js');

var config = {
  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080',
    './src/main.js'
  ],
  resolve: {
    alias: {
      'react': pathToReact,
      'react-dom': pathToReactDOM
    },
    root: [
      // allows us to import modules as if /src was the root.
      // so I can do: import Comment from 'components/Comment'
      // instead of:  import Comment from '../components/Comment' or whatever relative path would be
      path.resolve(__dirname, './src')
    ],
    // allows you to require without the .js at end of filenames
    // import Component from 'component' vs. import Component from 'component.js'
    extensions: ['', '.js', '.json', '.jsx']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        // dont run node_modules or bower_components through babel loader
        exclude: /(node_modules|bower_components)/,
        // babel is alias for babel-loader
        // npm i babel-core babel-loader --save-dev
        loader: 'babel',
        query: {
          // pass in presets here instead of in a babelrc file to be more explicit
          // npm i babel-preset-react babel-preset-es2015 --save-dev
          presets: ['react', 'es2015']
        }
      }
    ],
    // Speed up rebundling time
    noParse: [pathToReact, pathToReactDOM]
  }
}

module.exports = config;
