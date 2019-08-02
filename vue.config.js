const path = require('path')
const CompressionPlugin = require('compression-webpack-plugin')
const autoprefixer = require('autoprefixer')
const pxtorem = require('postcss-pxtorem')

function resolve (dir) {
  return path.join(__dirname, './', dir)
}

module.exports = {

  devServer: {
    port: 8520,
    open: true
  },

  productionSourceMap: false,

  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          red: '#FF303D',
          green: '#29B278',
          blue: '#007CF9',
          orange: '#FF8960',
          'text-color': '#111'
        }
      },
      postcss: {
        plugins: [
          autoprefixer(),
          pxtorem({
            rootValue: 37.5,
            propList: ['*'],
            selectorBlackList: ['van-'],
            minPixelValue: 2
          })
        ]
      }
    }
  },

  chainWebpack: config => {
    // 这里是对环境的配置，不同环境对应不同的BASE_URL，以便axios的请求地址不同
    config.plugin('define').tap(args => {
      args[0]['process.env'].VUE_APP_API_URL = JSON.stringify(process.env.VUE_APP_API_URL)
      return args
    })
    // 对打包的文件进行 hash 处理，防止缓存
    config
      .output
      .filename('[hash].js')
    if (process.env.NODE_ENV === 'production') {
      // #region 启用GZip压缩
      config
        .plugin('compression')
        .use(CompressionPlugin, {
          asset: '[path].gz[query]',
          algorithm: 'gzip',
          test: new RegExp('\\.(' + ['js', 'css'].join('|') + ')$'),
          threshold: 10240,
          minRatio: 0.8,
          cache: true
        })
        .tap(args => { })

      // #endregion
    }

    // svg loader
    const svgRule = config.module.rule('svg') // 找到svg-loader
    svgRule.uses.clear() // 清除已有的loader, 如果不这样做会添加在此loader之后
    svgRule.exclude.add(/node_modules/) // 正则匹配排除node_modules目录
    svgRule // 添加svg新的loader处理
      .test(/\.svg$/)
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })

    // 修改images loader 添加svg处理
    const imagesRule = config.module.rule('images')
    imagesRule.exclude.add(resolve('src/icons'))
    config.module
      .rule('images')
      .test(/\.(png|jpe?g|gif|svg)(\?.*)?$/)
  },
  pwa: {
    msTileColor: '#007CF9',
    themeColor: '#007CF9'
  }
}
