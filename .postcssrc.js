// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    // to edit target browsers: use "browserslist" field in package.json
    "autoprefixer": {},
    'postcss-pxtorem': {
      rootValue: 37.5, // iphone 6/7/8 '375x667', html font-size 10px 375/10
      propList: ['*', '!border*']
    }
  }
}
