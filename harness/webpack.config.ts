import path from "path";
import { Configuration } from "webpack";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";

const shared: Configuration = {
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};

const harness: Configuration = {
  ...shared,
  devServer: {
    static: path.join(__dirname, "build"),
    compress: true,
    port: 4000,
  },
  entry: "./harness/harness.tsx",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "harness.js",
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      async: false,
    }),
    new HtmlWebpackPlugin({
      template: "./harness/harness.html",
      filename: "index.html",
    }),
  ],
};
const app: Configuration = {
  ...shared,
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "app.js",
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      async: false,
    }),
    new HtmlWebpackPlugin({
      template: "./src/app.html",
      filename: "app.html",
    }),
  ],
};

export default [harness, app];
