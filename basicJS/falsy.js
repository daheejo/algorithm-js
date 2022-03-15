
//falsy:undefined , null , NaN , 0 , "" or '' (empty string), and the Boolean false
//solution1
function bouncer(arr) {
    let filtered = [];
    for (let i =0;i<arr.length;i++) {
        if(arr[i]) {
            filtered.push(arr[i])
        }
    }
  }
  
  bouncer([7, "ate", "", false, 9]);

//solution2
function bouncer(arr) {
    return arr.filter(Boolean);
}