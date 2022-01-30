// example 1
let countDown = function f(fromNumber) {
    console.log(fromNumber);

    let nextNumber = fromNumber - 1;

    if (nextNumber > 0) {
        f(nextNumber);
    }
}

let newYearCountDown = countDown;
countDown = null;
newYearCountDown(10);

// example 2
function countdown(n){
  if (n<1) {
    return [];
  } else {
    const countArray = countdown(n-1);
    countArray.unshift(n);
    return countArray
  }
}
