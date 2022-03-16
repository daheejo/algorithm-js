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

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var n;

rl.on("line", function (line) {
  n = parseInt(line);
  rl.close();
}).on("close", function () {
  var fibo = [];
  
  if (n > 2) {
    fibo.push(0);
    fibo.push(1);
  } else if (n == 1) {
    fibo.push(0);
  }
  
  for (var i = 2; i < n; i++) {
    if (fibo[i - 1] + fibo[i - 2] < n) {
      fibo.push(fibo[i - 1] + fibo[i - 2]);
    } else {
      break;
    }
  }
  console.log(fibo);
});