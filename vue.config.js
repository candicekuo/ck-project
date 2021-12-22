module.exports = {
  publicPath: '/ck-project/',
  devServer: {
    port: 3030,
    open: true,
  },
  css: {
    loaderOptions: {
      sass: {
        // v8 名稱 prependData ｜ v10 名稱 additionalData
        // 引入全局 scss
        data: `@import "@/assets/scss/main.scss";`,
      },
    },
  },
};
