// 여러 입력을 받도록 코드를 작성하세요.
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


let input = []
rl.on("line", function (line) {
  input = line.split(' ');
  rl.close();
}).on("close", function () {
    input 
});

for (i=0;i<input.length;i++) {
    console.log(input[i]);
}