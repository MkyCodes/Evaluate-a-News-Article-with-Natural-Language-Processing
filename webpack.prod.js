import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const entryPoint = './src/index.js'; 
const outputPath = path.resolve('dist'); 
const outputFileName = 'bundle.js'; 
const htmlTemplatePath = './src/index.html'; 

export default {
  entry: entryPoint,
  output: {
    path: outputPath,
    filename: outputFileName,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: htmlTemplatePath,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/, 
        exclude: /node_modules/, 
        use: 'babel-loader', 
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.json'], 
  },
};