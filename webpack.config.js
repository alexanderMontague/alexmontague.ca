const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = (env) => {
  return {
    entry: "./src/index.js",
    output: {
      path: path.join(__dirname, "/build"),
      filename: "index_bundle.js",
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.(jpg|png|gif)$/,
          use: {
            loader: "url-loader",
            options: {
              limit: 25000,
              name: "assets/[hash].[ext]",
            },
          },
        },
        {
          test: /\.mp4$/,
          use: "file-loader?name=videos/[name].[ext]",
        },
      ],
    },
    devServer: {
      open: true,
      hot: true,
      port: process.env.PORT || "3010",
      publicPath: "/",
      contentBase: "public",
      watchContentBase: true,
      historyApiFallback: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "src/index.html",
      }),
      new CopyPlugin([{ from: "public", to: "public" }]), // copies static files to build folder
      new webpack.DefinePlugin({}),
      new CleanWebpackPlugin(),
    ],
  };
};
