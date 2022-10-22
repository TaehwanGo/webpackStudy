const path = require('path'); // nodejs에서 파일의 경로를 쉽게 핸들링 할 수 있게 해주는 부품
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 로더는 로더의 이름을 rules에 적었지만
// plugin은 직접가져와서 실행시켜야함

module.exports = {
  mode:"development",
  entry: {
    index: './source/index.js',
    about: './source/about.js'
  },
  output: {
    path: path.resolve(__dirname, 'public'), 
    filename: '[name]_bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(css)$/i,
        use: [
          'style-loader',
          'css-loader' // 뒤쪽에 있는 로더가 먼저 실행 됨
        ]
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template:'./source/index.html',
      filename:'./index.html',
      chunks:['index'], // 원하는 js파일만 추가 하고 싶으므로 entry의 이름과 같은 것을 넣어줌 ''빼먹으면 실행안됨
    }),
    new HtmlWebpackPlugin({
      template:'./source/about.html',
      filename:'./about.html',
      chunks:['about'], // 원하는 js파일만 추가 하고 싶으므로 entry의 이름과 같은 것을 넣어줌 ''빼먹으면 실행안됨
    })
  ]
};
// npx webpack --entry ./source/index.js --output ./public/index_bundle.js 와 똑같은 코드

// __dirname : 현재 이 webpack.config.js의 경로를 알려주는 약속된 변수
// public에 최종 번들링된 파일을 저장하라는 뜻