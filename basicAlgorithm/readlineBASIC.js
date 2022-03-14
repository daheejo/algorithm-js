const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


var count = 0;
rl.on("line", function (x) {
  count += 1;
  console.log(x);
    // count가 10이 되면, 즉 입력을 10번 받으면 입력이 종료
  if (count === 10) {
    rl.close();
  }
}).on("close", function () {
  process.exit();
});