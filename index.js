let circularProcess = document.querySelector(".circular-bar"),
processValue = document.querySelector(".process-bar");


let processStartValue = 0,
processEndValue = 90,
speed = 25;

let process = setInterval(() => {
    processStartValue++;
    processValue.textContent = `${processStartValue}%`
    circularProcess.style.background = `conic-gradient(#7324f3 ${processStartValue * 3.6}deg, #ededed 0deg)`


    if(processStartValue == processEndValue){
        clearInterval(process);
    }
},speed);