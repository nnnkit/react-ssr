const path = require("path");
// const ErrorOverlayPlugin = require("error-overlay-webpack-plugin");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base");
const config = {
  entry: "./client/app.js",
  output: {
    filename: "client.bundle.js",
    path: path.resolve(__dirname, "dist")
  }
};

module.exports = merge(baseConfig, config);
