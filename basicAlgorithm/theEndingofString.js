function confirmEnding(str, target) {
    return str.slice(str.length-target.length) === target;
  }
  
  confirmEnding("Bastian", "n");
  confirmEnding("Open sesame", "same");