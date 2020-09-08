module.exports = {
    css: {
      loaderOptions: {
        postcss: {
          plugins: [
            require('autoprefixer')({
              Browserslist: ['Android >= 4.0', 'iOS >= 8']
            }),
            require('postcss-pxtorem')({ // 把px单位换算成rem单位
              rootValue: 37.5, // 换算的基数
              selectorBlackList: [], // 忽略转换正则匹配项
              propList: ['*']
            })
          ]
        }
      }
    },
  }