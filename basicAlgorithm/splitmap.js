// 엘리스 토끼는 하루에 용돈 500원을 받습니다.
// 하지만 숙제를 안 하고 놀러 다닌 엘리스는 용돈을 받지 못하게 되었습니다.
// money 문자열에서 "500원"을 기준으로 문자열을 나누어 리스트로 반환해봅시다.

// 지시사항
// money 문자열에서 "500원"을 기준으로 나누어 배열 형태로 저장하세요.
// 저장한 배열을 출력하세요.

// money 문자열입니다.
var money = '500원, 엘리스 토끼는 하루 용돈으로 500원. 단돈 500원을 받는다. 부모님이 주시는 500원. 하지만 잘못한 것이 있으면 500원을 받지 못한다.'

// 지시사항을 참고하여 코드를 작성하세요.
arr=[]
money.split('500원').map((el) => arr.push(el));
console.log(arr)