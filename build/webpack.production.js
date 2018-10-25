var merge = require('webpack-merge')
  , baseConfigs = require('./webpack.base')
  , path = require('path')

module.exports = merge(baseConfigs, {
  mode: 'production',
  entry: {
    index: './src/Kako/index.js'
  },
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'index.js',
    publicPath: '/',
    libraryTarget: 'umd'
  },
  externals: {
    'react': 'react',
    'react-dom': 'react-dom',
    'antd': 'antd'
  },
  plugins: []
})