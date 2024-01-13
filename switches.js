//SWITCH = can be an efficient replacement to many else if statement

let testScore =10;
let letterGrade;

switch(true){
    case testScore >=90:
        letterGrade ='A';
        break;
    case testScore >=80:
        letterGrade ='B';
        break;
    case testScore >=60:
        letterGrade ='c';
        break;
    case testScore >=50:
        letterGrade ='d';
        break;
    default:
        letterGrade='fail';
}
console.log(letterGrade);
// switch(day){
//     case 1:
//         console.log("it is monday");
//         break;
//     case 2:
//         console.log("its tuesday");
//         break;
//     case 3:
//         console.log("its wednesday");
//         break;
//     case 4:
//         console.log("its thursday");
//         break;
//     case 5:
//         console.log("its friday");
//         break;
//     case 6:
//         console.log("its saturday");
//         break;
//     case 7:
//         console.log("its sunday");
//         break;
//     default:
//         console.log(`${day} it is not day`);
// }



