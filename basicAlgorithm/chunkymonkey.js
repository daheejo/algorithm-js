function chunkArrayInGroups(arr, size) {
    var newarr = [];
    for (let i =0;i<arr.length;i+=size){
      newarr.push(arr.slice(i,i+size));
    } //사이즈에 i 더한 거 전까지 자르고 푸쉬
    return newarr;
  }
  
  chunkArrayInGroups(["a", "b", "c", "d"], 2);

function chunkArrayInGroups2(arr.size) {
    let newArr=[];
    let i = 0;

    while (i<arr.length) {
        newArr.push(arr.slice(i,i+size));
        i+=size;
    }
    return newArr;
} //another way