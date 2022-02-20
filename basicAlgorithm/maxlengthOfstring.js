function findLongestWordLength(str) {
    let word = str.split(' ');
    let maxlength = 0;
    for (let i=0;i<word.length;i++){
      if (word[i].length>maxlength) {
        maxlength = word[i].length
      }
    }
    return maxlength;
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");