module.exports = {
  entry: "./src/index.ts",
  output: {
    path: __dirname + "/lib/",
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: "awesome-typescript-loader"
      }
    ]
  },
  devServer: {
    watchContentBase: true,
    port: 8088
  },
  resolve: {
    extensions: [".ts", ".js"]
  }
};