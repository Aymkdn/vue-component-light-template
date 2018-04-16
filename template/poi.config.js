// config file for poi
const webpack = require.main.require('webpack')

module.exports = {
  webpack:function(config) {
    //config.plugins.push(new webpack.IgnorePlugin(/^sp-request$/))
  },
  html:{
    template:"./src/build.html",
    minify:false,
    inject:'head'
  }
}
