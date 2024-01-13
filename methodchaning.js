//Method Chaning = calling one method after another 
//                      in one continouous line of code.

let username = window.prompt("enter the user name:");

//No Method Chaining

// username = username.trim();
// let letter = username.charAt(0);
// letter = letter.toUpperCase();

// let extraChars = username.slice(1);
// extraChars = extraChars.toLowerCase();
// username = letter + extraChars;

console.log(username);

// Method chaning

username = username.trim().charAt().toUpperCase() + username.trim()+slice(1).toLowerCase();

