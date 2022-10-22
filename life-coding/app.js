// server setting
const express = require('express');
const { default: globalRouter } = require('./routers/globalRouter');

const app = express();

const PORT = 3000;

// const test = document.querySelector('#root');
// test.innerHTML = word;
app.set('view engine', 'pug');
app.use("/", globalRouter);


app.listen(PORT, () => console.log(`Listening on: http://localhost:${PORT}`)); // 포트 4000번을 리슨