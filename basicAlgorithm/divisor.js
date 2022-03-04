const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line",(line) => {
    let index = 1;
    while (index<=line) {
        if (line % index ==0) {
        console.log(index);
        }
        index++
    }
}).on("close",()=> {
    process.exit();
});