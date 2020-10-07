const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: resolve(__dirname, "../src/index.js"),
  output: {
    path: resolve(__dirname, "../dist/static"),
    filename: "js/main.[hash:5].js",
    //where the static files locate
    publicPath: "/static",
  },
  module: {
    rules: [
      {
        //will only match one
        oneOf: [
          //babel-loader
          {
            test: /\.(js|jsx)$/,
            loader: "babel-loader",
            exclude: /node_modules/,
          },
          //css loader-translates CSS into CommonJS
          {
            test: /\.css$/,
            exclude: /node_modules/,
            use: [
              {
                loader: MiniCssExtractPlugin.loader,
              },
              "css-loader",
              "postcss-loader",
            ],
          },
          //less loader-compiles Less to CSS
          {
            test: /\.less$/,
            exclude: /node_modules/,
            use: [
              {
                loader: MiniCssExtractPlugin.loader,
              },
              "css-loader",
              "postcss-loader",
              {
                loader: "less-loader", // compiles Less to CSS
                options: {
                  lessOptions: {
                    modifyVars: {
                      "primary-color": "#1DA57A",
                      "link-color": "#1DA57A",
                      "border-radius-base": "2px",
                    },
                    javascriptEnabled: true,
                    sourceMap: true,
                  },
                },
              },
            ],
          },
          //img loader
          {
            test: /\.(jpg|svg|png|gif|pdf|jpeg)$/,
            use: {
              loader: "file-loader",
              options: {
                name: "[name].[hash:5].[ext]",
                outputPath: "media/",
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, "../src/index.html"),
      filename: resolve(__dirname, "../dist/index.html"),
      //optimize html
      minify: {
        collapseWhitespace: true,
        removeComments: true,
      },
    }),
    //separate css from js
    new MiniCssExtractPlugin({
      filename: "css/[name].[hash:5].css",
      chunkFilename: "css/[id].[hash:5].css",
    }),
  ],
  //divide into different chunks
  optimization: {
    splitChunks: {
      // include all types of chunks
      chunks: "all",
    },
  },
  //extensions
  resolve: {
    extensions: [".js", ".jsx", ".json", ".css"],
  },
};
