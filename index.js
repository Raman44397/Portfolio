const circularProcesses = document.querySelectorAll(".circular-bar");
 
const animateCircularBar = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const circularProcess = entry.target;
      const processValue = circularProcess.querySelector(".process-bar");
      let processStartValue = 0;
      const processEndValue = parseInt(processValue.textContent);
      const speed = 25;
 
      const process = setInterval(() => {
        processStartValue++;
        processValue.textContent = `${processStartValue}%`;
        circularProcess.style.background = `conic-gradient(#7324f3 ${processStartValue * 3.6}deg, #ededed 0deg)`;

        if (processStartValue === processEndValue) {
          clearInterval(process);
          observer.unobserve(circularProcess); 
        }
      }, speed);
    }
  });
};
 
const options = {
  root: null, 
    threshold: 0.3,
};

const observer = new IntersectionObserver(animateCircularBar, options);


circularProcesses.forEach((circularProcess) => {
  observer.observe(circularProcess);
});