'use strict'
const merge = require('webpack-merge')
const devEnv = require('./dev.env')

module.exports = merge(devEnv, {
  NODE_ENV: '"testing"',
  devServer: {
    overlay: {
      warnings: false,
      errors: false
    }
  }
})
