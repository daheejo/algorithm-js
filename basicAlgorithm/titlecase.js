// Return the provided string with the first letter of each word capitalized. 
//Make sure the rest of the word is in lower case.
// For the purpose of this exercise, you should also capitalize connecting words like the and of.

function titleCase(str) {
    const newTitle = str.split(" ");
    const updatedTitle = []; //create a variable to track the updated title.
    for (let st in newTitle) {
      updatedTitle[st] = newTitle[st][0].toUpperCase() + newTitle[st].slice(1).toLowerCase();
    }
    return updatedTitle.join(" ");
  }

  titleCase("I'm a little tea pot");