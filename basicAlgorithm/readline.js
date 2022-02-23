const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line",(line)=>{
    console.log(line);

});

rl.close(); //여러 줄을 입력받고 싶을 때 여기에 입력 종료 조건 주기