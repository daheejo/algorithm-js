// You are given two arrays and an index.
// Copy each element of the first array into the second array, in order.
// Begin inserting elements at index n of the second array.
// Return the resulting array. The input arrays should remain the same after the function runs.
// frankenSplice([1, 2, 3], [4, 5], 1) should return [4, 1, 2, 3, 5].
// frankenSplice([1, 2], ["a", "b"], 1) should return ["a", 1, 2, "b"].
function frankenSplice(arr1, arr2, n) {
    let secondArr=arr2.slice();
    for (let i =0;i<arr1.length;i++){ //iterate through every item in arr1
        sencondArr.splice(n,o,arr1[i]);
        n++; // increment the index n by one. This will ensure that every item from the arr1 is inserted into localArray in the proper index position.
    }
    return sencondArr;
  }
  
  frankenSplice([1, 2, 3], [4, 5, 6], 1);