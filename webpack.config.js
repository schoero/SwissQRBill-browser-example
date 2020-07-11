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
    port: 80
  },
  resolve: {
    extensions: [".ts", ".js"]
  }
};