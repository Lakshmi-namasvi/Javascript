// var x=1;
// a();
// b();

// function a(){
//     var x=10;
//     console.log(x);
// }
// function b(){
//     var x=100;
//     console.log(x)
// }


//Lecial envirnoment and scope chanin

// function a(){
//     var b=10;
//     c()
//     function c(){
        
//    console.log(b)

//     }
// }
// a();
// console.log(b)
//======= let and const

// let x=10;
// console.log(x);
// const b=10;
// const c=10;
// console.log(c)
// var a=10;
// var a=100;
// console.log(a);

//=====closures=====

// function x() {
//     var a=7;
//     function y(){
//         console.log(a);
//     }
//     return y;
// }
// var z= x();
// console.log(z);
// ///.......
// z();

//.................SetTimeOut......

// function x(){
//     var i=10;
//     setTimeout(function(){
//         console.log(i)
//     },3000)
//     console.log("namaste Java Script");
// }
// x();

//...every 1 sencond it should print 1, 2, 3, 4,5
//using let example
// function x(){
//     var i=10;
//     for(let i=1;i<=5;i++){
//         setTimeout(function(){
//             console.log(i);
//         },i*3000)
//     }

// }
// x();


//-------using only var

function x(){
    for(var i=1;i<=5;i++){
        function close(x){
            setTimeout(() => {
                console.log(x)
            }, x*3000);
        }
        close(i)
    }
}
x();