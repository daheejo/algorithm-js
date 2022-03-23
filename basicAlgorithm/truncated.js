function truncateString(str, num) {
    if (str.length>num) {
      let truncated  = str.slice(0,num) +'...';
      return truncated;
    } else {
      return str;
    }
  }
  
  truncateString("A-tisket a-tasket A green and yellow basket", 8);