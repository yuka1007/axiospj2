module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "https://api.coin.z.com/public",
        pathRewrite: { "/api":""}
      }
    }
  }
};