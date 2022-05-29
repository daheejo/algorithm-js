// 공백으로 구분하여 두 숫자가 주어집니다.
// 두번째 숫자로 첫번째 숫자를 나누었을 때 
// **그 몫과 나머지를 공백으로 구분하여 출력하세요.**

const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let input = []
rl.on('line',(line)=>{
    input = line.split(' ').map(el=>parseInt(el))
    rl.close()
}).on('close',()=>{
    const a = input[0]
    const b = input[1]
    let output = []
    let q = a/b
    let r = a%b
    output.push(q,r)
    console.log(output[0],output[1])
    process.exit
})