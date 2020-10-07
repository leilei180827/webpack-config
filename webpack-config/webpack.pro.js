const { merge } = require("webpack-merge");
const { resolve } = require("path");
const base = require("./webpack.base.js");
//optimize css files
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
process.env.NODE_ENV = "production";
module.exports = merge(base, {
  mode: "production",
  devtool: "source-map",
  plugins: [new OptimizeCssAssetsPlugin()],
});
