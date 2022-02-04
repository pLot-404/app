const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  mode: 'production',

  // メインとなるjavascriptファイル（エントリーポイント）
  entry: './src/App.ts',
  // ファイルの出力設定
  output: {
    // 出力ファイルのディレクトリ名
    path: `${__dirname}/dist`,
    // 出力ファイル名
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                outputStyle: 'expanded',
              },
            },
          },
        ],
      },
      {
        // 拡張子.tsもしくは.tsxの場合
        test: /\.tsx?$/,
        // TypeScriptをコンパイルする
        use: 'ts-loader',
      },
    ],
  },
  // import文で.tsや.tsxファイルを解決するため
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port: 3000,
    open: true,
  },

  plugins: [
    new CopyWebpackPlugin({
      patterns: [{ from: 'public/static', to: './' }],
    }),

    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public/index.html'),
    }),
    new MiniCssExtractPlugin({
      filename: 'css/style.css',
      ignoreOrder: true,
    }),
    new CleanWebpackPlugin(),
    new StylelintPlugin({
      fix: true,
    }),
  ],
};
