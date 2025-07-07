const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: '/form/',
  outputDir: 'docs',
  transpileDependencies: [
    'vuetify'
  ]
})
