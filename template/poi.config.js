// config file for poi
const webpack = require.main.require('webpack');
const demo = process.env.NODE_ENV === 'development' || process.env.npm_lifecycle_event === 'demo';

let options = {
  webpack:function(config) {
    //config.plugins.push(new webpack.IgnorePlugin(/^sp-request$/))
  }
}
if (!demo) {
  options.html={
    template:"./src/build.html",
    minify:false,
    inject:'head'
  }
};

module.exports = options;
