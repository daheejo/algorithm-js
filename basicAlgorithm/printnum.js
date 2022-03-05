// 입력 예시 
// 5
// 출력 예시 
// 1, 2, 3, 4, 5

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


let arr = []
rl.on("line", function (line) {
    for (i=1;i<=line;i++) {
        arr.push(i);   
    }
    console.log(arr.join(', '));
}).on("close", function () {
    
    process.exit();
});