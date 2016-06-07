var DeepMerge = require('deep-merge');
var path= require('path');
var deepmerge = DeepMerge(function(target, source, key) {
  if(target instanceof Array) {
    return [].concat(target, source);
  }
  return source;
});

// generic

var defaultConfig = {
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['monkey-hot','babel']
     },
     {
      test: /\.js$/,
      loader: 'babel-loader',
      include: [path.join(__dirname)],
      exclude: /node_modules/,
      query: {
        babelrc: false,
        presets: [
          'react', 'es2015'
        ]
      }
    }
    ]
  }
};

if(process.env.NODE_ENV !== 'production') {
  defaultConfig.devtool = 'source-map';
  defaultConfig.debug = true;
}

var config=function(overrides) {
  return deepmerge(defaultConfig, overrides || {});
};


module.exports= config;
