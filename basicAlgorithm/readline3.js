// 입력 예시
// 100 200 300

// 출력 예시
// 200

// 입력 예시 2
// 16 25 72

// 출력 예시 2
// 37

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var input = []

rl.on("line", function (line) {
  input = line.split(' ').map((el) => parseInt(el));
  rl.close();
}).on("close", function () {
  console.log(Math.floor((input[0] + input[1] + input[2]) / 3))
});