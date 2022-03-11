// 배열에 최근 먹은 음식들이 [점심, 저녁, 점심, 저녁, …] 순으로 들어가 있습니다.
// 지시사항을 따라 점심 메뉴만 화면에 출력하세요.
// 배열의 길이를 출력하세요.
// 반복문을 사용해 모든 메뉴를 웹 화면에 출력해 보세요.
// 2에서 작성한 반복문을 수정해 점심 메뉴인 경우에만 출력하여 제출하세요.
var foods = ["hamburger", "pasta", "curry", "chicken", "salad", "tteokbokki", "ramen", "pizza", "gimbap", "sushi"]

document.write(foods.length);
for (let i =0; i<foods.length;i++) {
    if (i%2==0) {
        document.write(foods[i])
    }
}
