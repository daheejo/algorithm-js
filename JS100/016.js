// 입출력

// 입력 : 거꾸로
// 출력 : 로꾸거

n = 'upsidedown'

sen =''
for (let i =n.length-1;i>=0;i--){
    sen+=n[i]
}

console.log(sen)

//배열메소드 방법
const m = '로꾸꺼'
const reverseM= m.split('').reverse().join('')


