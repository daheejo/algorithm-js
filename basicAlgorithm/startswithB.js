// 주어진 배열 fruits에서 b로 시작하는 과일은 몇 개인지 반복문과 조건문을 사용해 구하고
// 아래와 같이 웹 화면에 출력되도록 구해봅시다.
// b로 시작하는 과일은 2개

const fruits = ['apple', 'banana', 'orange', 'blueberry', 'strawberry']
var sum = 0; // b로 시작하는 과일의 개수를 저장하는 변수

/*지시사항을 따라 작성해주세요*/
for (fruit in fruits) {
    if (fruit[0]==='b') {
        sum++;
        }
}


document.write(`b로 시작하는 과일은 ${sum}개`);