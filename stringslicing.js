//String slicing = creating a substring from a portion of another string
//                      string.slice(start, end)

// const fullname ="LAkshmi devi";
// let firstname = fullname.slice(0,7);
// let lastname = fullname.slice(8);
// let firstname1 = fullname.slice(0,fullname.indexOf(" "))
// let lastname2 = fullname.slice(fullname.indexOf(" ") +1);

const email ="lakshmi@gmail.com"

let username = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@") +1 );
console.log(extension);
