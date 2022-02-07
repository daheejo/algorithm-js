// A promise in JavaScript is exactly what it sounds like - 
// you use it to make a promise to do something, usually asynchronously. 
// When the task completes, you either fulfill your promise or fail to do so. 
// Promise is a constructor function, so you need to use the new keyword to create one. 
// It takes a function, as its argument, with two parameters - resolve and reject. 
// These are methods used to determine the outcome of the promise.

const makeServerRequest = new Promise((resolve, reject) => {

});

const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer represents a response from a server
    let responseFromServer;
      
    if(responseFromServer) {
      resolve("We got the data")
    } else {  
      reject("Data not received")
    }
  });