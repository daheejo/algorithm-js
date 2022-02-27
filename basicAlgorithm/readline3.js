// 여러 숫자를 입력 받도록 코드를 작성하여, 입력된 숫자의 평균을 구하세요.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input  =[]
rl.on("line", function (line) {
    input = line.split(' ').map(el=>parseInt(el));
  rl.close();
}).on("close", function () {

});