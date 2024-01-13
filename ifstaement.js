//if statements = if a condition istrue, execute some code if not, do something else

// let age=10;
// if(age>=16){
//     console.log("you are eligilble for PUC College");
// }
// else{
//     console.log("you are not eligible for PUC");
// }
//============================================
// let isStudent = false;
// if(isStudent){
//     console.log("you are a Student");
// }else{
//     console.log("youre not a Student");
// }
//......................................

// let age=18;
// let islecense =false;
// if(age>=16){
//     console.log("you are eligible to drive the car");
//     if(islecense){
//         console.log("you must the have the license to drive the car")
//     }else{
//         console.log("you don't have license to drive the car");
//     }
// }else{
//     console.log("you are to young to drive a car ")
// }
//........................................................

let age =-1;
if(age>=100){
    console.log("you are TO OlD to enter the site")
}else if(age>16){
    console.log("you're eligible to enter the site");
}else if(age<0){
    console.log("you age can't be below 0");
}else if(age ==0){
    console.log("you are just born baby you cant enter the site")
}else{
    console.log("you must be 16+ to enter the site");
}