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

Set up babelrc to use the presets for webpack compiling and for mocha testing
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

Make expect global:
```
describe('expect to be available', () => {
  it('is there', () => {
    expect(true).to.be.true;
  });
});
```

Get enzyme set up:
```
describe('(Component) CommentContainer', () => {
  it('renders as a div', () => {
    const wrapper = shallow(<CommentContainer />);

    expect(wrapper.type()).to.eql('div');
  });
});
```

Get sinon set up:
```
npm i sinon --save-dev

# test_helper.js
global.sinon = sinon;
```


Setting up karma:
```
npm i karma karma-mocha --save-dev
npm install --save-dev karma-phantomjs-launcher
npm i karma-webpack --save-dev
```

set up karma.config.js
