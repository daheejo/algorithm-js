//case 1
const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
 //1) const { today: highToday, tomorrow: highTomorrow} = HIGH_TEMPERATURES
 //2) const { today, tomorrow } = HIGH_TEMPERATURES
  //const today = HIGH_TEMPERATURES.today
  //const tomorrow = HIGH_TEMPERATURES.tomorrow

//case 2
  const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
  };
    
  const { today: { low:lowToday, high:highToday}} = LOCAL_FORECAST

//case 3
//Use destructuring assignment to swap the values of a and b 
// so that a receives the value stored in b, and b receives the value stored in a.
let a = 8, b = 6;
[a,b] = [b,a]

//case 4
//Use destructuring assignment with the rest parameter 
//to perform an effective Array.prototype.slice() so that arr is a sub-array of 
//the original array source with the first two elements omitted.
const source = [1,2,3,4,5,6,7,8,9,10];

function removeFirstTwo(list) {
  // Only change code below this line
  const [a, b, ...arr] = list;
  // Only change code above this line
  return arr;
}
const arr = removeFirstTwo(source);

//case 5
//example
const profileUpdate = (profileData) => {
    const { name, age, nationality, location } = profileData;
  
  }

const profileUpdate = ({ name, age, nationality, location }) => {

}
// Use destructuring assignment within the argument to the function half 
// to send only max and min inside the function.
const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
  };
  
  // Only change code below this line
  const half = ({max , min}) => (max + min)/2.0;
   
  // Only change code above this line