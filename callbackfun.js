// function hello(back){
//         console.log("hello");  
//         back();  
// }
// function leave(){
//     console.log("?LEave")
// }
// function goodbye(){
//     console.log("GoodBYE");
// }
// hello(leave);

///passing other arguments including callback

function sum(back,x,y){
    let resu = x+y;
    back(resu);
}
function display(resu){
    console.log(resu);
}

function displaypage(resu){
    document.getElementById("mydom").textContent = resu;
}
sum(displaypage,2,5);