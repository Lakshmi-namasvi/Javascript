// how to accept user input

//1 easy way == using window prompt
//2 professional way ==html textbox

// let username;

// username= window.prompt("what is your name");
// console.log(username);

//..........professional way.... usinghtml file check that 
//to click the button and submit
let username;
document.getElementById("mysubmit").onclick=function(){
    username =document.getElementById("mytext").value;
    document.getElementById("myname").textContent =`hello ${username}`
    console.log(username);
}