for (var i = 1; i <= 30; i++) {
    if ((i % 10) % 3 == 0 && (i % 10) != 0) {
      console.log('짝!');
    } else if (Math.floor((i / 10) % 3) == 0 && Math.floor(i / 10) != 0) {
      console.log('짝!');
    } else {
      console.log(i);
    }
  }