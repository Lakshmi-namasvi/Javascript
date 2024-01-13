const increasebtn = document.getElementById("increase");
const decreasebtn = document.getElementById("decrease");
const reset =document.getElementById("reset");
const countlabel = document.getElementById("countlabel");
let count=0;
increasebtn.onclick = ()=>{
     count++;
    return countlabel .textContent =count;

}
decreasebtn.onclick =()=>{
    count--;
    return(countlabel.textContent=count);
}
reset.onclick = ()=>{
    count=0;
    return(countlabel.textContent=count);
}