// 다음 배열에서 400, 500를 삭제하는 code를 입력하세요.

var nums = [100, 200, 300, 400, 500];

//1
var numsNew = nums.slice(0,3);
console.log(numsNew)

//2
nums.splice(3);
console.log(nums);