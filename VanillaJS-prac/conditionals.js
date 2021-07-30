const age = parseInt(prompt("How old are you?"));

if (isNaN(age) || age < 0) {
  console.log("Plz write a real positive number");
 } else if (age <18) {
  consoke.log("you are too young to drink.");
 } else if (age >=18 && age <=50) {   // || 는 or
  console.log("you can drink!");
 } else if (age > 50 && age <=80) {
  console.log("you had better not to drink.");
 } else if (age > 80) {
  console.log("you can do whatever you want.");
 } 
