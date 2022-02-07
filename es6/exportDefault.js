// you will use this syntax if only one value is being exported from a file. 
// It is also used to create a fallback value for a file or module.

export default function add(x, y) {
    return x + y;
  }
  
  export default function(x, y) {
    return x + y;
  }