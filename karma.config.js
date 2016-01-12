// karma.conf.js
module.exports = function(config) {
  config.set({
    browsers: ['PhantomJS'],
    singleRun: true, //just run once by default
    frameworks: ['mocha', 'chai'],
    files: [
      'node_modules/babel-polyfill/dist/polyfill.js',
      './node_modules/phantomjs-polyfill/bind-polyfill.js',
       {
        pattern: `./test/**/*.js`,
        watched: false,
        served: true,
        included: true
      }
    ],
    preprocessors: {
      // add webpack as preprocessor
      ['./test/**/*.js']: ['webpack']
    },
    webpack: {
       resolve: {
        alias: {
          'sinon': 'sinon/pkg/sinon'
        }
      },
      module: {
        noParse: [
          /node_modules\/sinon\//
        ],
        loaders: [
          { test: /\.js?$/, exclude: /node_modules/, loader: 'babel', query: { presets: ['react', 'es2015'] } },
          { test: /\.json$/, loader: 'json' }
        ],
      },
      externals: {
        'jsdom': 'window',
        'cheerio': 'window',
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': 'window'
      },
    },
    webpackMiddleware: {
      // webpack-dev-middleware configuration
      // i. e.
      noInfo: true
    },

    plugins: [
      'karma-mocha',
      'karma-chai',
      'karma-webpack',
      'karma-phantomjs-launcher'
    ]
  });
};
