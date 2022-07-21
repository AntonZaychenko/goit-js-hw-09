
const body = document.querySelector('body')
const btnStart = document.querySelector('[data-start]')
const btnStop = document.querySelector('[data-stop]')

btnStart.addEventListener('click', startChange)
btnStop.addEventListener('click', stopChange)


const logger = time =>  body.style.backgroundColor = getRandomHexColor()
let intervalId = 0

// функция RandomColor
function getRandomHexColor() {
    
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

//   функция при клике Start
function startChange(colorChange) {
    intervalId =  setInterval(logger, 1000, 1000);
        btnStart.disabled = true
        btnStop.disabled = false
}
// функция при клике Stop
function stopChange(stopColorChange) {
    
       clearInterval(intervalId)
         btnStart.disabled = false
         btnStop.disabled = true
}  