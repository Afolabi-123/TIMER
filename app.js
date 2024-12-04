let timerdisplay = document.querySelector("#timerdisplay")
let startbtn = document.querySelector("#startbtn")

let stopbtn = document.querySelector("#stopbtn")
let rstbtn = document.querySelector("#rstbtn")

let thetimer = 0;

let mytimer;
  
startbtn.addEventListener('click',function(){
    mytimer = setInterval(function(){

        thetimer = thetimer + 1
    
        timerdisplay.innerHTML = thetimer;
    
    }, 50);
})

stopbtn.addEventListener('click',function(){
    clearInterval(mytimer);
})
rstbtn.addEventListener('click',function(){
    clearInterval(mytimer);
    timerdisplay.innerHTML = "0"
    thetimer = 0
})



