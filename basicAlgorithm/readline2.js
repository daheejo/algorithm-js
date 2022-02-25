// 입력 예
// 100 200 300
// 출력 예
// 100
// 200
// 300
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
    input.forEach(el=>{
        console.log(el)
    })
    process.exit
});