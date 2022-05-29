// 입출력

// 입력 : mary
// 출력 : MARY

const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.on('line',(line)=>{
    console.log(line.toUpperCase())
    rl.close()
}).on('close',()=>{
    
    process.exit
})