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
