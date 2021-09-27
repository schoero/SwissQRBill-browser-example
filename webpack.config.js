const webpack = require("webpack");

module.exports = {
  entry: { 
    "pdf": "./src/pdf.js",
    "svg": "./src/svg.js"
  },
  target: "web",
  module: {
    rules: [
      // bundle and load afm files verbatim
      {
        test: /\.afm$/,
        type: "asset/source"
      },
      // convert to base64 and include inline file system binary files used by fontkit and linebreak
      {
        enforce: "post",
        test: /fontkit[/\\]index.js$/,
        loader: "transform-loader",
        options: {
          brfs: {}
        }
      },
      {
        enforce: "post",
        test: /linebreak[/\\]src[/\\]linebreaker.js/,
        loader: "transform-loader",
        options: {
          brfs: {}
        }
      }
    ]
  },
  devtool: "inline-source-map",
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      // maps fs to a virtual one allowing to register file content dynamically
      fs: "pdfkit/js/virtual-fs.js",
      // iconv-lite is used to load cid less fonts (not spec compliant)
      "iconv-lite": false
    },
    fallback: {
      crypto: false,
      stream: require.resolve("readable-stream"),
      util: require.resolve("util"),
      buffer: require.resolve("buffer"),
      zlib: require.resolve("browserify-zlib"),
      assert: require.resolve("assert/")
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: "process/browser",
      Buffer: ["buffer", "Buffer"]
    }),
    new webpack.NormalModuleReplacementPlugin(new RegExp(/\.js$/), function(resource) {
      if(resource.context.includes("node_modules") !== true){
        resource.request = resource.request.replace(".js", "");
      }
    })
  ],
  output: {
    filename: "[name].js",
    path: __dirname + "/lib/",
    libraryTarget: "umd",
    library: "SwissQRBill"
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
};