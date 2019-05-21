const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

  module.exports = {
    entry: {
      index: path.join(__dirname, './src/config/entrance')
    },
    output: {
      path: __dirname + '/dist',
      filename: '[name].min.js'
    },
    devServer: {                                     //配置
      contentBase: "./dist",
      historyApiFallback: true,
      inline: true,
      progress: true,
      hot: true,
      port: 8080
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader'
            
          }
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            { loader: 'css-loader', options: { importLoaders: 1 } },
            'postcss-loader'
          ]
        },
        {
          test: /\.(png|woff|svg|ttf|eot|jpg|JPG)$/,
          loader: 'url-loader'
        }
      ]
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    externals: {
      'react': 'React',
      'react-dom': 'ReactDOM'
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: path.join(__dirname, './public/index.html'),
        chunks: ['index']
      }),
      new webpack.HotModuleReplacementPlugin()
    ]
  }