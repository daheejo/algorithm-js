// 입력
// 5

// 출력
//     *
//    ***
//   *****
//  *******
// *********

function makeTree(num){
    for (let i =1;i<=num;i++){
        let tree="";
        for (let j=1;j<=num-i;j++){//공백
            tree=tree+" ";
        }
        for (let k=1;k<=i*2-1;k++){//별추가
            tree=tree+"*"
        }
        console.log(tree)
    }
}

makeTree(5)