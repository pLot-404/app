const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const StylelintPlugin = require("stylelint-webpack-plugin");

module.exports = {
  mode: "development",
  // mode: "production", //Delete slash when you release
  entry: path.join(__dirname, "src", "App.ts"),

  output: {
    path: path.join(__dirname, "build"),
    filename: "js/bundle.js",
  },

  devtool: "inline-source-map",

  target: "es5",

  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
          },
          {
            loader: "sass-loader",
            options: {
              sassOptions: {
                outputStyle: "expanded",
              },
            },
          },
        ],
      },
      {
        test: /\.ts?$/,
        use: "babel-loader",
        exclude:"./node_modules/"
      },
    ],
  }, // TO DO

  resolve: {
    extensions: [".js", ".ts", ".scss", ".json"],
  },

  devServer: {
    contentBase: path.join(__dirname, "build"),
    open: true,
    overlay: {
      warnings: true,
      errors: true,
    },
    port: 3000,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html",
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: "./public/static", to: "./" }],
    }),
    new MiniCssExtractPlugin({
      filename: "css/style.css",
      ignoreOrder: true,
    }),
    new StylelintPlugin({ fix: true }),
  ],
};
