## OUTDATED!!! --> Use Jest, it's great :-)

This starter kit goes with a blog post I wrote on how to set up TDD React
environment.  [The blog post can be found here](http://spencerdixon.com/blog/setting-up-testing-in-react.html).

**Goal**: Goal of this starter kit is just to act as an example of a pretty
robust testing environment for React.  

### Getting Started
```
git clone git@github.com:SpencerCDixon/react-testing-starter-kit.git myProject
cd myProject

nvm use 5.1.0    # make sure to use v4 or greater
npm install

# open split terminal window
npm run dev      # get webpack server running
npm run dev:test # to get karma test server going
```

**Note** The webpack config in this project is not out of the box ready for
production.  You will want to set up Plugins like UglifyJS and a
compile script that compiles webpack in production mode.


### Tooling
This starter kit uses:
* Mocha
* Chai
* Sinon
* Enzyme
* Karma
* Webpack
