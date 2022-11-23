const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/webpack-react-tutorial/src/main/resources/js"),
    filename: "tutorial-atlaskit-screen.js"
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: {
        loader: "babel-loader"
      }
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ]
}