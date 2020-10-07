//transform css according to the browserslist attribute in package.json
module.exports = {
  plugins: [
    [
      "postcss-preset-env",
      {
        // Options
      },
    ],
  ],
};
