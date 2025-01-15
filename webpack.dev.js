const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

// Webpack configuration settings
module.exports = {
  entry: "./src/client/index.js", 
  mode: "development", 
  devtool: "source-map", 
  stats: "verbose", 

  module: {
    rules: [
      {
        test: /\.js$/, 
        exclude: /node_modules/, 
        use: "babel-loader",
      },
      {
        test: /\.scss$/, 
        use: ["style-loader", "css-loader", "sass-loader"], 
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/client/views/index.html", 
      filename: "./index.html", 
    }),
    new CleanWebpackPlugin({
      dry: true, 
      verbose: true, 
      cleanStaleWebpackAssets: true, 
      protectWebpackAssets: false, 
    }),
  ],

  devServer: {
    port: 3000, 
    allowedHosts: "all", 
  },
};