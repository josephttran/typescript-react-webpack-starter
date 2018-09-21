module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.js",
    path: __dirname + "/dist"
  },

  // Enable sourcemaps for debugging webpack's output
  devtool: "source-map",

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },

  module: {
    rules: [
      //Files '.ts' or '.tsx' extension handled by 'awesome-typescript-loader'
      { 
        test: /\.tsx?$/, 
        loader: "awesome-typescript-loader"
      },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      }
    ]
  },
  //Avoid bundling all of React into the same file, cache libraries
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  }
}
