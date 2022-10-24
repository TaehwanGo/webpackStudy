# React 개발 환경을 구축하면서 배우는 웹팩(Webpack) 기초

## 프로젝트 설정하기

```
npm init -y

npm install @babel/core @babel/preset-env @babel/preset-react babel-loader clean-webpack-plugin css-loader html-loader html-webpack-plugin mini-css-extract-plugin node-sass react react-dom sass-loader style-loader webpack webpack-cli webpack-dev-server
```

## 웹팩으로 자바스크립트 파일 빌드하기

```js
const path = require("path");

module.exports = {
  entry: "./src/test.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname + "/build"),
  },
  mode: "none",
};
```

- entry : 빌드할 파일을 알려줌
  - ./src/test.js 파일 기준으로 import 되어 있는 모든 파일들을 찾아서 하나로 합침
- output : 빌드 결과에 대한 설정
  - filename: 빌드 후 결과 파일명
  - path: 빌드된 파일이 생성될 경로
- mode : 웹팩 빌드 옵션
  - production : 최적화 되어 빌드되는 특징
  - develop: 빠르게 빌드
  - none : 아무 기능없이 빌드

```
npm run build
```

- build 된 파일 생성 됨

## 웹팩으로 HTML 파일 빌드하기

- 웹팩은 자바스크립트 뿐만 아니라 다른 파일도 모듈로 관리할 수 있다
  - 웹팩 로더(loader)
- 로더는 JS파일이 아닌 파일을 웹팩이 이해할 수 있게 해줌

```js

module.exports = {
  // ...
  module : {
    rules: {
      test: '가지고올 파일 정규식',
      use: [
        {
          loader: '사용할 로더 이름',
          options: { 사용할 로더 옵션 }
        }
      ]
    }
  }
}
```

### html noscript tag

- noscript 태그 안의 내용은 스크립트를 지원하는 않는 웹브라우저나 스크립트를 실행하지 않도록 설정한 웹브라우저에서만 출력됩니다.
- https://www.codingfactory.net/10249

### html과 같이 빌드하면 번들링된 js 파일이 해당 html에 포함된다

## 웹팩으로 리액트 빌드하기

- webpack.config.js에 resolve extension 설정을 해야 된다

### 빌드 파일 -> process is not defined

- https://stackoverflow.com/questions/41359504/webpack-bundle-js-uncaught-referenceerror-process-is-not-defined
  - dotenv 패키지 설정필요

## 웹팩에서 CSS 사용하기

```js
{
  test: /\.css$/,
  use: [MiniCssExtractPlugin.loader, "css-loader"],
},
```

- loader순서는 오른쪽에서 왼쪽 순서로 실행 됨
  - css-loader로 css파일을 읽고
  - MiniCssExtractPlugin.loader로 읽은 CSS를 파일로 추출해냄
