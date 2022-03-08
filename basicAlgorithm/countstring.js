// 입력 예시 1
// 난 안 촉촉한 초코칩보다 촉촉한 초코칩이 좋기 때문에 촉촉한 초코칩을 사 먹을 거야
// 출력 예시 1
// 3

// 입력 예시 2
// 안 촉촉한 초코칩 나라에 살던 안 촉촉한 초코칩이 촉촉한 초코칩 나라의 촉촉한 초코칩을 보고 촉촉한 초코칩이 되고 싶어서 촉촉한 초코칩 나라에 갔는데 촉촉한 초코칩 나라의 문지기가 "넌 촉촉한 초코칩이 아니고 안 촉촉한 초코칩이니까 안 촉촉한 초코칩 나라에서 살아"라고 해서 안 촉촉한 초코칩은 촉촉한 초코칩이 되는 것을 포기하고 안 촉촉한 초코칩 나라로 돌아갔다네
// 출력 예시 2
// 13

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


rl.on("line", function (line) {
    let arr = [];
    arr.push(line);
    if  arr.match(/촉촉한 초코칩/) == false {
        console.log('no match');
    } else {
        console.log(str.match(regex).length);
    }
}).on("close", function () {
    
    process.exit();
});