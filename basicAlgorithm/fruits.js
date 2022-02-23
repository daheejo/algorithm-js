// fruits 배열을 만들어 과일들을 입력받고, fruits 배열에서 콩과 무를 제거하세요.
// 과일이 아닌 것을 잘 제거했는지 console.log를 통해 배열을 출력해 확인해봅니다.
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  const fruits = input[0].split(" ");
  const result = fruits.filter(
    (fruit) => fruit !== "콩" && fruit !== "무"
  );

  console.log(result);
});

//입력 예시 
//사과 오렌지 딸기 콩 무

//출력 예시
//[ '사과', '오렌지', '딸기' ]