// const autoprefixer = require('autoprefixer')
// const pxtorem = require('postcss-pxtorem')
// module.exports = {
//   plugins: [
//     autoprefixer({
//       overrideBrowserslist: [
//         'Android 4.1',
//         'iOS 7.1',
//         'Chrome > 31',
//         'ff > 31',
//         'ie >= 8'
//       ]
//     }),
//     pxtorem({
//       rootValue: 75, //结果为：设计稿元素尺寸/37.5，比如元素宽375px,最终页面会换算成 10rem
//       propList: ['*'],
//       selectorBlackList: ['.van-notify', ], //黑名单内的类名，将不会自动rem转换
//     })
//   ]
// }
module.exports = {
    css: {
        loaderOptions: {
          postcss: {
            plugins: [
              require("postcss-px2rem")({
                remUnit: 75
              })
            ]
          }
        }
    }
}