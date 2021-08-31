const path = require('path');

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.join(__dirname, 'src/')
      },
      extensions: ['.js', '.vue']
    }
  },
  css : {
    loaderOptions : {
      scss : {
        additionalData: `
          @import "@/scss/main.scss";
        `
      },
    }
  }
}