const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var s;
var result = '';

rl.on("line", function (line) {
  s = line;
  rl.close();
}).on("close", function () {
  for (var i = 0; i < s.length; i++) {
    if (s[i] == ' ') {
      result += "링디기디기\n";
    } else if (s[i] == '.') {
      result += "딩딩딩\n";
    } else {
      result += "링딩동 ";
    }
  }
  console.log(result)
});