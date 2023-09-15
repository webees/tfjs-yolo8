const { VantResolver } = require('unplugin-vue-components/resolvers')
const ComponentsPlugin = require('unplugin-vue-components/webpack')
const IS_DEV = process.env.NODE_ENV === 'production' ? false : true

const vueBuild = c => {
  c.plugin('html').tap(([options]) => [
    Object.assign(options, {
      minify: {
        removeComments: true,
        removeCommentsFromCDATA: true,
        collapseWhitespace: true,
        conservativeCollapse: false,
        collapseInlineTagWhitespace: true,
        collapseBooleanAttributes: true,
        removeRedundantAttributes: true,
        removeAttributeQuotes: false,
        removeEmptyAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
        minifyJS: true,
        minifyCSS: true
      },
      inject: true,
      chunksSortMode: 'none'
    })
  ])
}

const vueServe = c => {
  c.plugin('html').tap(([options]) => [
    Object.assign(options, {
      minify: false,
      inject: true,
      chunksSortMode: 'none'
    })
  ])
}

const vueConfig = {
  publicPath: IS_DEV ? '/' : '/',
  outputDir: 'dist',
  productionSourceMap: IS_DEV,
  integrity: false,
  css: {
    extract: false,
    sourceMap: IS_DEV,
    loaderOptions: {}
  },
  devServer: {
    port: 8888,
    open: false,
    proxy: null
  },
  configureWebpack: {
    externals: {
      'vue-router': 'VueRouter',
      'vue-i18n': 'VueI18n',
      vue: 'Vue',
      axios: 'axios',
      vant: 'vant'
    },
    plugins: [
      ComponentsPlugin({
        resolvers: [VantResolver()]
      })
    ]
  },
  chainWebpack: c => (IS_DEV ? vueServe(c) : vueBuild(c))
}

module.exports = vueConfig
