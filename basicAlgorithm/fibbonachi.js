const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function fib(n) {
    let result = [0,1];
    for (let i =2;i<=n;i++) {
        let a =result[i-1];
        let b = result[i-2];
        result.push(a+b);
    }
    result.pop();
    return result;
};


rl.on("line", function (line) {
    console.log(fib(line));
}).on("close", function () {
    
    process.exit();
});

// 입력 예시
// 5
// 출력 예시
// [0, 1, 1, 2, 3] 
// # 다음 항은 5인데 5미만이므로 해당되지 않음