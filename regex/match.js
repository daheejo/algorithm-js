
var words = ['i', 'have', 'a', 'pen', 'i', 'have', 'pineapple', 'i', 'have', 'an', 'apple', 'pen'];

// 문자 p의 개수
words.splice(4,2);
words.splice(5,3);
lyrics = words.join(' ');
console.log(lyrics);
let p = lyrics.match(/p/g);
console.log(p.length);