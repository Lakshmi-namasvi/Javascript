
//checked =property that determines the checked state of an HTML checkbox or radio button element
const myCheckbox =document.getElementById("myCheckbox");
const visaBtn =document.getElementById("visaBtn");
const masterBtn =document.getElementById("masterBtn");
const paypalBtn =document.getElementById("paypalBtn");
const mySubit =document.getElementById("mySubit");
const mysubResult =document.getElementById("mysubResult");
const mycardresult =document.getElementById("mycardresult");

mySubit.onclick =()=>{
    if(myCheckbox.checked){
        mysubResult.textContent =`you are subscribed`
    }else{
        mysubResult.textContent =`you are Not subscribed`
    }
    if(visaBtn.checked){
        mycardresult.textContent=`you are paying with visa`;
    }else if(masterBtn.checked){
        mycardresult.textContent=`you are paying with master card`;
    }else if(paypalBtn.checked){
        mycardresult.textContent=`you are paying with paypal card`;
    }else{
        mycardresult.textContent=`you are not selected the payment method button`;
    }
}