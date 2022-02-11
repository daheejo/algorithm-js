// 1.Usernames can only use alpha-numeric characters.
// 2.The only numbers in the username have to be at the end. 
//   There can be zero or more of them at the end. Username cannot start with the number.
// 3.Username letters can be lowercase and uppercase.
// 4.Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters.

let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i; //or
/^[a-z]([0-9]{2,}|[a-z]+\d*)$/i;
let result = userCheck.test(username);

//https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-restrict-possible-usernames/301363