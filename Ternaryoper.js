//Ternary operator = a shortcut to if{} and else{} statement
//                   helps to assign a variable based on a condition
//                     condition? codeIfTrue : codeIfFalse;

// let age=20;
// let message= age>=18 ? "youre an adult" : "you're a minor";
// console.log(message);

// let time =21;
// let greeting = time>12 ? "Good Afternoon": "Good Morning";
// console.log(greeting);

// let isStudent = true;
// let message = isStudent ? "you are a student": "you are not a Student";
// console.log(message);

//........purchase discount calculated....

let purchaseAmount = 999;
let discount =purchaseAmount>=1000 ? 10 :0;
let result = `your to total amount is ${purchaseAmount -purchaseAmount*(discount/100)}`;
console.log(result);