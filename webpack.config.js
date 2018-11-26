const path = require('path');
const webpack = require('webpack');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = (env) => {
  const isProduction = env === 'production';

  return {
    entry: ['babel-polyfill', './src/app.js'],
    output: {
      path: path.join(__dirname, 'public', 'dist'),
      filename: 'bundle.js'
    },
    module: {
      rules: [{
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }]
    },
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
      proxy: {
        "/api/**": {
          target: "http://[::1]:3000"
        }
      },
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true,
      publicPath: '/dist/'
    },
    // resolve: {
    //   alias: {
    //     Containers: path.resolve('src/containers/'),
    //     Components: path.resolve('src/components/'),
    //     Helpers: path.resolve('src/helpers/'),
    //     Services: path.resolve('src/services/')
    //   }
    // }
  };
};
