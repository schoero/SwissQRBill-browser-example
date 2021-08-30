module.exports = {
  entry: "./src/index.ts",
  devtool: "inline-source-map",
  output: {
    path: "/lib/",
    filename: "index.js"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      }
    ]
  },
  devServer: {
    static: {
      directory: "./",
    },
    devMiddleware: {
      publicPath: "/lib/"
    },
    port: 8000
  },
  resolve: {
    extensions: [".ts", ".js"]
  }
};