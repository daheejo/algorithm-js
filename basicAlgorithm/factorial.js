function factorialize(num) {
    let result = 1
    for (let i =1;i<=num;i++){
      result *= i;
    }
    return result;
  }
  
  factorialize(5);
//for 문

function factorial(num) {
    if (num ===0) {
        return 1;
    }
    return num * factorial(num-1);
} 
//재귀
factorial(5);