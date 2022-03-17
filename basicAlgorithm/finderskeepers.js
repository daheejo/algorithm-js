function findElement(arr, func) {
    let num;
    for (let i=0;i<arr.length;i++) {
      num = arr[i];
      if (func(num)) {
        return num;
      } 
      }
      return undefined;
    }
    
  
findElement([1, 2, 3, 4], num => num % 2 === 0);

// findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }) should return 8.

// findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }) should return undefined.