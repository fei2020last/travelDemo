const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}
// const vConsolePlugin = require('vconsole-webpack-plugin'); // 引入 移动端模拟开发者工具 插件 （另：https://github.com/liriliri/eruda）
const CompressionPlugin = require('compression-webpack-plugin') //Gzip
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin //Webpack包文件分析器
module.exports = {
  //基本路径
  publicPath: '/', //vue-cli3.3+新版本使用
  //输出文件目录
  outputDir: 'custcomp',
  // eslint-loader 是否在保存的时候检查
  lintOnSave: false,
  //放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
  assetsDir: 'static',
  //以多页模式构建应用程序。
  pages: undefined,
  //是否使用包含运行时编译器的 Vue 构建版本
  runtimeCompiler: false,
  //是否为 Babel 或 TypeScript 使用 thread-loader。该选项在系统的 CPU 有多于一个内核时自动启用，仅作用于生产构建，在适当的时候开启几个子进程去并发的执行压缩
  parallel: require('os').cpus().length > 1,
  //生产环境是否生成 sourceMap 文件，一般情况不建议打开
  productionSourceMap: false,
  // webpack配置
  //对内部的 webpack 配置进行更细粒度的修改 https://github.com/neutrinojs/webpack-chain see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
  chainWebpack: (config) => {
    /**
     * 删除懒加载模块的prefetch，降低带宽压力
     * https://cli.vuejs.org/zh/guide/html-and-static-assets.html#prefetch
     * 而且预渲染时生成的prefetch标签是modern版本的，低版本浏览器是不需要的
     */
    //config.plugins.delete('prefetch');

    config.plugin('html').tap((args) => {
      args[0].title = '自定义组件'
      return args
    })
  },
  //调整 webpack 配置 https://cli.vuejs.org/zh/guide/webpack.html#%E7%AE%80%E5%8D%95%E7%9A%84%E9%85%8D%E7%BD%AE%E6%96%B9%E5%BC%8F
  configureWebpack: (config) => {
    //生产、测试环境
    let pluginsPro = [
      new CompressionPlugin({
        //文件开启Gzip，也可以通过服务端(如：nginx)(https://github.com/webpack-contrib/compression-webpack-plugin)
        filename: '[path].gz[query]',
        algorithm: 'gzip',
        test: new RegExp('\\.(' + ['js', 'css'].join('|') + ')$'),
        threshold: 8192,
        minRatio: 0.8
      })
      //	Webpack包文件分析器(https://github.com/webpack-contrib/webpack-bundle-analyzer)
      // new BundleAnalyzerPlugin()
    ]
    //开发环境
    let pluginsDev = []
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...process.env.NODE_ENV !== 'development'
      config.plugins = [...config.plugins, ...pluginsPro]
    } else {
      // 为开发环境修改配置...
      config.plugins = [...config.plugins, ...pluginsDev]
    }
  },
  css: {
    // 启用 CSS modules
    modules: false,
    //是否使用css分离插件
    extract: true,
    //开启 CSS source maps，一般不建议开启
    sourceMap: false,
    //css预设器配置项
    loaderOptions: {
      css: {
        importLoaders: 1 // @import 引入的文件可被一个loader处理 （2 可被两个loader处理）
      },

      // 手机端px转化为rem
      // postcss: {
      //   // options here will be passed to postcss-loader
      //   plugins: [require('postcss-px2rem')({
      //     remUnit: 75 //如果是750的设计图需要将remUnit替换成75 这样生成出来的比例就是1rem=100px
      //   })]
      // }
    }
  },
  // webpack-dev-server 相关配置 https://webpack.js.org/configuration/dev-server/
  devServer: {
    // host: 'localhost',
    // host: '0.0.0.0',
    // port: 8000, // 端口号
    https: false, // https:{type:Boolean}
    open: true, //配置自动启动浏览器  http://172.11.11.22:8888/rest/XX/
    hotOnly: true, // 热更新
    proxy: {
      '/dev': {
        target: 'http://222.171.203.221:19100/shj',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/dev': ''
        }
      },
    }
  },

  // 第三方插件配置 https://www.npmjs.com/package/vue-cli-plugin-style-resources-loader
  pluginOptions: {
    'style-resources-loader': {
      //https://github.com/yenshih/style-resources-loader
      preProcessor: 'scss', //声明类型
      patterns: [
        //path.resolve(__dirname, './src/assets/scss/_common.scss'),
      ]
      //injector: 'append'
    }
  }
}