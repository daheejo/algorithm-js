// 매개변수 n이 소수라면 true를, 소수가 아니라면 false를 반환합니다.
function isPrime(n){
    let divisor = 2;
    if (n==1) {
    return false; //1은 소수가 아님
    }
    while(n>divisor) {
        if(n%divisor==0) {
        return false;
        } else {
            divisor++;
        }
    }
    return true;
}


for(let i = 1; i <= 10; i++) {
    document.writeln(i, isPrime(i));
}