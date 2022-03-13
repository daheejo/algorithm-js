const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var N = 0;
var count = 0;
var result = '';
rl.on("line", function (x) {
  if (count == 0) {
    N = parseInt(x);
  } else {
    result += x;
  }
  
  count += 1;
  
  if (count > N) {
    rl.close();
  }
}).on("close", function () {
  console.log(result);
  process.exit();
});

// 입력 예시
// 3
// a
// b
// c

// 출력 예시
// abc

// 입력 예시2
// 5
// e
// l
// i
// c
// e

// 출력 예시2
// elice