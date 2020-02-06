
let clock = document.getElementById('clock');
console.log(clock)
let timer = null; 


clock.addEventListener("mouseover", function(){
    clearInterval(timer);  
    timer = null;  
  });
  clock.addEventListener("mouseout", function() {
    timer = setInterval(runClock, 1000);
  });


timer = setInterval(runClock, 1000);

function runClock(){
    clock.innerHTML = new Date().toLocaleTimeString();            
}