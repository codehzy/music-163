const path = require('path')

// npm i craco-less@2.1.0-alpha.0
const CracoLessPlugin = require('craco-less')

const resolve = (dir) => path.resolve(__dirname, dir)

module.exports = {
  plugins: [{ plugin: CracoLessPlugin }],
  webpack: {
    alias: {
      '@': resolve('src'),
      '@components': resolve('src/components')
    }
  }
}
