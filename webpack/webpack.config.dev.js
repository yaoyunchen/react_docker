var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-hot-middleware/client',
    path.join(__dirname, '..', 'src/main.js')
  ],
  output: {
    path: path.join(__dirname, '..', 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: 'babel-loader',
        exclude: /node_modules/,
        include: path.join(__dirname, '..', 'src')
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
        exclude: /node_modules/
      },
      {
          test: /\.css$/,
          loaders: ['style-loader', 'css-loader'],
      },
      {
          test: /\.html$/,
          loader: 'file-loader?name=[name].[ext]'
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
