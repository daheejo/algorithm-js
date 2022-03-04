const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
let input = [];
rl.on("line",(line)=>{
    input = line.split(' ').map(el=>parseInt(el));
    a = input[0];
    b = input[1];
    c = input[2];
    d = input[3];
    if (((a<=b)&&(a==d)&&(b>c)&&(c<6)) || ((a==b)&&(a==c)&&(a==d))) {
    console.log(true);
    } else {
    console.log(false);
    }
}).on("close",()=> {
    
    process.exit();
});

// 아래의 1, 2, 3, 4의 조건을 동시에 충족하는 경우 또는 5, 6, 7의 조건을 동시에 충족하는 경우 true를 아니라면 false를 출력합니다.

//1 a는 b보다 작거나 같다.
//2 a는 d와 같다.
//3 b는 c보다 크다.
//4 c는 6보다 작다.
//5 a는 b와 같다.
//6 a는 c와 같다.
//7 a는 d와 같다.