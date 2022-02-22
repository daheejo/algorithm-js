function reverseString(str) {
    let reversed ="";
    for (let i=str.length-1; i >=0;i--) {
      reversed += str[i]
    }
    return reversed;
  }
  
  reverseString("hello");

  function reverse(str){

    var reverStr = "";
    for (let i = str.length-1;i>=0;i--){
        reverStr = reverStr+str.charAt(i);
    }
    return reverStr;
}

console.log(reverse("Nice to meet you"));