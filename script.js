document.addEventListener('DOMContentLoaded', () => {

const timerCount = document.getElementById('#timer')
let timeLeft = 60

function countDown(){
    setInterval(function(){
     if(timeLeft <= 0) {
         clearInterval(timeLeft = 0)
     }
     timerCount.innerHTML = timeLeft
     timeLeft -=1
    }, 1000)
}

timerCount.addEventListener('Load', countDown);