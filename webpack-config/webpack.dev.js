const { merge } = require("webpack-merge");
const { resolve } = require("path");
const base = require("./webpack.base");
process.env.NODE_ENV = "development";
module.exports = merge(base, {
  mode: "development",
  devtool: "cheap-module-eval-source-map",
  devServer: {
    contentBase: resolve(__dirname, "../dist"),
    port: "3000",
    hot: true,
    publicPath: "/static",
    writeToDisk: true,
  },
});
