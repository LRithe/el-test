const nodeExternals = require('webpack-node-externals')
const baseWebpackConfig = require('../build/webpack.base.conf')
const merge = require('webpack-merge')

if (process.env.NODE_ENV === 'test') {
  module.exports = merge(baseWebpackConfig, {
    externals: [nodeExternals()],
    devtool: 'eval'
  })
}
