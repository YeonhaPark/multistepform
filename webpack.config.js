const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require('copy-webpack-plugin');

// 웹팩 설정에 관한 다양한옵션을 정의합니다
module.exports = {

  // 웹팩의 엔트리포인트가 될 패스입니다. 
  entry: './src/index.js',

  // 번들링하는 결과물이 담길 경로와 파일 이름을 지정합니다.
  // 모든 자바스크립트 형태 파일을 아래에 번들링합니다. 
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        // 폰트 파일을 위한 룰을 설정합니다.
        test: /\.(woff|woff2|ttf|otf|eot)$/,
        use: [
               {
                 
                 loader: "file-loader",
                 options: {
                   outputPath: 'fonts'
                 }
               }
             ]
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass')
            }
          },

        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ //웹팩이 html을 빌드할 수 있게 도와줍니다.
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin({ //css 형태의 파일을 번들링해줍니다.
      filename: "bundle.css"
    }),
    new CopyPlugin([ //assets에 담긴 파일을 dist폴더에 카피하여 fetch API통신이 가능하게 합니다.
      { from: 'src/assets', to: 'assets' }
    ])
  ]
}