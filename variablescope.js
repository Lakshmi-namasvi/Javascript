//variable scope = where a variable is recognized and accessible (local vs global)

let z=20;
console.log(z); // global variable we cann acces throught the program any where


function f1(){
    let x=1;
    console.log(x);
    console.log(z);
}
function f2(){
    let y=10;
    console.log(y);
}
console.log(x);// we cannot acces sthe local variable outside the function

f1();