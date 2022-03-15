const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var input;

rl.on("line", function (line) {
  input = parseInt(line);
  rl.close();
}).on("close", function () {
  var i = 1;
  var total = 0;
  var count = 0;
  var result = '';
  
  while (input >= i) {
    if (input % i == 0) {
      if (count % 10 == 0) {
        console.log(result);
        result = [];
      }
      result += i;
      result += ' ';
      count += 1;
    }
  i += 1;
  }
  console.log(result);
});

//약수 10개씩 출력
//입력 예시 : 60
//출력 예시
//1 2 3 4 5 6 10 12 15 20
//30 60