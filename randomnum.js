// const min=50;
// const max=100;
// let randomnumber =Math.floor(Math.random()*(max-min))+min;
// console.log(randomnumber);

const mybutton =document.getElementById("roolbtn");
const label= document.getElementById("roollabel");
const label2= document.getElementById("roollabel2");
const label3= document.getElementById("roollabel3");
const min=1;
const max=6;
let randomnum;
let randomnum2;
let randomnum3;
mybutton.onclick =()=>{
    randomnum= Math .floor(Math.random()*max)+min;
    randomnum2= Math .floor(Math.random()*max)+min;
    randomnum3= Math .floor(Math.random()*max)+min;
    label.textContent=randomnum;
    label2.textContent=randomnum2;
    label3.textContent=randomnum3;
}