Studying webpack to supplement Chapter 4, webpack part in wetube
- 생활코딩

- [x] 1. 수업소개
- [ ] 2. 웹팩 이전의 세계와 모듈
- [ ] 3. 웹팩의 도입
- [ ] 4. 설정 파일 도입
- [ ] 5. 모드의 도입
- [ ] 6. 로더의 도입
- [ ] 7. output 설정
- [ ] 8. 플러그인의 도입
- [ ] 9. 선물
- [ ] 10. npm 패키지 사용
- [ ] 11. 수업을 마치며
<br>
<br>
# Note
1. CORS policy 이슈<br>
- express로 서버를 만들어서 하려다가 잘 안돼서 로컬로 실행하려 했으나 CORS policy 관련에러 발생<br>
- npm install http-server -g 후 npx http-server로 해결<br>
- 참고 : https://velog.io/@takeknowledge/%EB%A1%9C%EC%BB%AC%EC%97%90%EC%84%9C-CORS-policy-%EA%B4%80%EB%A0%A8-%EC%97%90%EB%9F%AC%EA%B0%80-%EB%B0%9C%EC%83%9D%ED%95%98%EB%8A%94-%EC%9D%B4%EC%9C%A0-3gk4gyhreu

2. 웹팩(번들러) : 웹에서도 모듈의 개념 + 여러개의 파일을 묶어서 제공(성능향상)

3. webpack 설치 안됨
- 프로젝트 이름을 webpack으로 만들어서 webpack이 설치가 안됨
- package.json 의 name을 webpack에서 webpackStudy로 변경