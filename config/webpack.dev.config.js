const siteConfig = require('./utils');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const glob = require('glob');
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.config.js');

module.exports = merge(webpackBaseConfig, {
  devtool: 'source-map',
  //插件，用于生产模板和各项功能
  plugins: [
    //导出html文档
    new HtmlWebpackPlugin({
      favicon: path.resolve('favicon.ico'),
      hash: true, //为了开发中js有缓存效果，所以加入hash，这样可以有效避免缓存JS。
      filename: 'index.html',
      title: '我只是一个首页而已！', //它的title为one，记得要在src/one.html中加入<%= %>
      template: 'index.html', //是要打包的html模版路径和文件名称。
      chunks: ['index'] //入口文件一对一打包
    }),
    new HtmlWebpackPlugin({
      favicon: path.resolve('favicon.ico'),
      hash: true, //为了开发中js有缓存效果，所以加入hash，这样可以有效避免缓存JS。
      filename: 'about.html',
      title: '想了解我么就点我呗！', //它的title为one，记得要在src/one.html中加入<%= %>
      template: 'about.html', //是要打包的html模版路径和文件名称。
      chunks: ['about']
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin() //用户名替代id
  ],
  //配置webpack开发服务功能
  devServer: {
    //设置基本目录结构
    contentBase: path.resolve(__dirname, '../dist'),
    //服务器得IP地址，可以使用IP也可以使用localhost
    host: siteConfig.host,
    //服务器端压缩是否开启
    compress: true,
    //配置服务端口号
    port: siteConfig.port
  }
});
