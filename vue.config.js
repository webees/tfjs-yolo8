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
  publicPath: IS_DEV ? '/' : '//fastly.jsdelivr.net/gh/webees/tfjs-yolov8@gh-pages/',
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
      require('unplugin-vue-components/webpack')({
        resolvers: [require('unplugin-vue-components/resolvers').VantResolver()]
      }),
      require('unplugin-auto-import/webpack')({
        // targets to transform
        include: [
          /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
          /\.vue$/,
          /\.vue\?vue/, // .vue
          /\.md$/ // .md
        ],
        // global imports to register
        imports: [
          'vue',
          'vue-router',
          {
            axios: [
              ['default', 'axios'] // import { default as axios } from 'axios',
            ]
          },
          {
            from: 'vue-router',
            imports: ['RouteLocationRaw'],
            type: true
          }
        ],
        // Enable auto import by filename for default module exports under directories
        defaultExportByFilename: false,
        vueTemplate: false,
        injectAtEnd: true,
        eslintrc: {
          enabled: true
        }
      })
    ]
  },
  chainWebpack: c => (IS_DEV ? vueServe(c) : vueBuild(c))
}

module.exports = vueConfig
