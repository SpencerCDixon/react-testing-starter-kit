Step 1: Set up webpack + babel

```
npm install --save-dev babel-loader babel-core webpack
```

Create webpack.config.js
```
var webpack = require('webpack');
var path = require('path');

var config = {
  entry: ['./src/main.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['babel'], exclude: /node_modules/ }
    ]
  }
}

module.exports = config;
```

Set up dev server for bettter development:
```
npm i webpack-dev-server -S
```

Useful Webpack Links:
https://github.com/petehunt/webpack-howto
https://christianalfoni.github.io/react-webpack-cookbook/Getting-started.html
http://blog.madewithlove.be/post/webpack-your-bags/

```
# .babelrc
{
  "presets": ["react", "es2015"]
}
```

## Testing
```
npm i mocha chai --save-dev
```

Add scripts to package.json
"test": "mocha --compilers js:babel-register --recursive",
"test:watch": "npm test -- --watch",
