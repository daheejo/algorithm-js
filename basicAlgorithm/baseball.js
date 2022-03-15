const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var input = [];

rl.on("line", function (line) {
  
  input.push(parseInt(line));
  
  if (input.length == 2) {
    rl.close();
  }
}).on("close", function () {
  var x = input[0];
  var y = input[1];
  var ans = (6 + y) / (16 + x);


  if (Math.floor(ans * 10) != 0) {
    console.log(Math.floor(ans * 10) + '할')
  }
  if (Math.floor((ans * 100) % 10) != 0) {
    console.log(Math.floor(ans * 100) % 10 + '푼')
  }
  if (Math.floor(((ans * 1000) % 100) % 10) != 0) {
    console.log((Math.floor(ans * 1000) % 100) % 10 + '리')
  }
});

// 야구에서 타수는 선수가 공을 치기 위해 타석에 선 횟수이고 안타는 공을 잘 쳐서 출루한 횟수입니다.

// 타율은 안타를 타수로 나눈 비율로 만약 8타수 5안타라면 5/8 = 0.625로 야구에서는 6할 2푼 5리라고 읽습니다.

// 야구선수 토끼는 타율이 가장 높은 선수에게 주어지는 상인 타격왕이 되고 싶어 합니다.

// 토끼의 현재 타율은 16타수 6안타로 3할 7푼 5리입니다.

// 이후의 타수와 안타가 입력으로 주어질 때 토끼의 타율을 할푼리로 출력해보세요.

// 단, 0.101 처럼 가운데 0이 들어가 있는 경우 0은 생략하여 1할 1리라고 출력하며 타율이0.3678 인 경우에는 소수점 넷째자리 이후는 버림을하여 3할 6푼 7리로 출력합니다.

// 입력 예시
// 3
// 2

// 출력 예시
// 4할
// 2푼
// 1리

// 입력 예시 2
// 5
// 2

// 출력 예시 2
// 3할
// 8푼