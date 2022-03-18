function repeatStringNumTimes(str, num) {
    let result = '';
    for (let i=0;i<num;i++) {
      result+=str;
    }
    return result;
  }
  
  repeatStringNumTimes("abc", 3);

  //recursion way
  function repeatStringNumTimes(str, num) {
    if (num < 1) {
      return "";
    } else {
      return str + repeatStringNumTimes(str, num - 1);
    }
  }