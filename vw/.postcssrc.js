// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    // to edit target browsers: use "browserslist" field in package.json
    "postcss-aspect-ratio-mini": {},
    "postcss-write-svg":{
      utf8: false
    },

    "postcss-cssnext":{},
    "postcss-px-to-viewport": {
      viewportWidth: 750,   //设计稿宽度 视窗宽度
      viewportHeight: 1334,  //设计稿高度  视窗高度 iphone8
      unitPrecision: 3,      //指定‘px'转视窗单位后保留的小数位数
      viewportUnit: 'vw',    //指定转换的视窗单位
      selectorBlackList: [".ignore", '.hairlines'],  //指定不转换的（class）类名
      minPixelValue: 1,  //设置小于1px不转换
      mediaQuery: false  //允许媒体查询中转换“px”
    },

    "postcss-viewport-units": {},
    "cssnano": {
      preset: "advanced",
      autoprefixer: false,
      "postcss-zindex": false
    }
  }
}
