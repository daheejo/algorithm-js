// 훈련병들이 있는 배열입니다.
var soldier = [12, 2, 5, 3, 7, 4, 10, 8, 1, 9, 13, 11, 6];

// 정렬된 배열과 길이를 구하세요.
soldier.sort(function (a,b) {
return a-b;
});
var count = soldier.length;

console.log(soldier);
console.log(count);
