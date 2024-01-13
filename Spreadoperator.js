//Spread Operator ==...allows an iterable such as an array or string to be
//expanded into separate elements (unpacks the elements)

// let numbers =[1,2,3,4,5];
// let maximum = Math.max(...numbers);
// let minmum = Math.min(...numbers);
// console.log(minmum);

let username ="Lakshmi Devi";
let letters = [...username].join("-");
console.log(letters)


//to combine the both arrays
let fruits =['apple','bannana','orange','pineaapple'];
let vegies =['carrots', 'potates','tomotos','greenleaves']
let foods=[...fruits,...vegies];
console.log(foods);