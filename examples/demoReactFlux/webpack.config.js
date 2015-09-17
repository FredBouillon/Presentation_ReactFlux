var webpack = require('webpack');
var path = require('path');

module.exports = {
  devtool: "eval",
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server', 
    './app/App.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: "bundle.js",
    publicPath: '/public/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],  
  module: {
    loaders: [{
      test: /\.js$/, 
      loaders: ['react-hot', 'jsx-loader'],
      include: path.join(__dirname, 'app')
    }]    
  }
};