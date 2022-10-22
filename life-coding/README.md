Studying webpack to supplement Chapter 4, webpack part in wetube
- 생활코딩

- [x] 1. 수업소개
- [x] 2. 웹팩 이전의 세계와 모듈
- [x] 3. 웹팩의 도입
- [x] 4. 설정 파일 도입
- [x] 5. 모드의 도입
- [x] 6. 로더의 도입
- [x] 7. output 설정
- [x] 8. 플러그인의 도입
- [x] 9. 선물
- [x] 10. npm 패키지 사용
- [x] 11. 수업을 마치며
<br>
<br>
# Note<br>
1. CORS policy 이슈<br>
- express로 서버를 만들어서 하려다가 잘 안돼서 로컬로 실행하려 했으나 CORS policy 관련에러 발생<br>
- npm install http-server -g 후 npx http-server로 해결<br>
- 참고 : https://velog.io/@takeknowledge/%EB%A1%9C%EC%BB%AC%EC%97%90%EC%84%9C-CORS-policy-%EA%B4%80%EB%A0%A8-%EC%97%90%EB%9F%AC%EA%B0%80-%EB%B0%9C%EC%83%9D%ED%95%98%EB%8A%94-%EC%9D%B4%EC%9C%A0-3gk4gyhreu

2. 웹팩(번들러) : 웹에서도 모듈의 개념 + 여러개의 파일을 묶어서 제공(성능향상)

3. webpack 설치 안됨
- 프로젝트 이름을 webpack으로 만들어서 webpack이 설치가 안됨
- package.json 의 name을 webpack에서 webpackStudy로 변경

6. loader 적용안됨 -> webpack.config.prod.js 파일 삭제 후 적용 됨

9. npx webpack --watch : --watch 옵션을 추가하면 변화되는 것을 감지해서 변화될때마다 컴파일을 자동으로 다시 해줌 

10. npm을 통해 설치한 라이브러리를 우리 프로젝트에 포함시킬때 웹팩을 이용하는 방법(lodash 라이브러리를 예제로 사용)
 - 그냥 import하면 됨, 특별한 것 없음

11. 수업을 마치며
 - 웹팩의 기능중 DevServer : live reload, hot module replacement
 - Code splitting : 코드를 번들링하면 큰파일이 생성되는데 이것을 쪼갬
 - Lazy Loading : 그렇게 쪼개진 것들을 필요할때마다 로딩하는 것

