// 공백으로 구분하여 두 숫자 a와 b가 주어지면, a의 b승을 구하는 프로그램을 작성하세요.


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
    const a = input[0]
    const b = input[1]
    console.log(a**b)
    process.exit
});