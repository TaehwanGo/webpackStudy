const path = require('path'); // nodejs에서 파일의 경로를 쉽게 핸들링 할 수 있게 해주는 부품

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
};
// npx webpack --entry ./source/index.js --output ./public/index_bundle.js 와 똑같은 코드

// __dirname : 현재 이 webpack.config.js의 경로를 알려주는 약속된 변수
// public에 최종 번들링된 파일을 저장하라는 뜻