// 입력
// Yujin Hyewon
// 70 100

// 출력
// {'Yujin': 70, 'Hyewon': 100}

const readline=require('readline')

const rl = readline.createInterface({
    input:process.stdin,
    output: process.stdout
})


let lineCnt = 0;
let arr = [];

rl.on('line',line=>{
    arr=line.split('').map(el=>parse)
    lineCnt+=1
    if (lineCnt==3){
        rl.close()
    }

})