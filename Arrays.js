//Arrays = a variable like structure that can hold more than 1 value

let fruit =["apple", "orange", "banana", "pineapple"];
// console.log(fruit);
// console.log(fruit[0]);
// console.log(fruit[2]);
// console.log(fruit[4]);//display the undefined 

fruit.push("coconut");//add an element to array
fruit.pop(); //removes last element in an array
fruit.unshift("mango"); // add element to beginning
fruit.shift(); // removes element from beginning
let numoffruits = fruit.length;//find the length of array
let index = fruit.indexOf("pineapple"); // index of the items in array
console.log(index);
// console.log(fruit);
// for(let i=0;i<fruit.length;i++){
//     console.log(fruit[i]);
// }

// for(let fruits of fruit){
//     console.log(fruits);
// }
//console.log(fruit.sort().reverse());//sort the array and revers the array

for(let i=fruit.length-1;i>0;i--){
    console.log(fruit[i])
}