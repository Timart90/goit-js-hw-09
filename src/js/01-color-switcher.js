const body = document.querySelector('body');
const btnStart = document.querySelector("button[data-start]");
const btnStop = document.querySelector("button[data-stop]");

btnStart.addEventListener('click', changeColor);
btnStop.addEventListener('click', stopChangeColor)

let timerId = null;

function changeColor(e) {
  timerId = setInterval(() => body.style.backgroundColor = getRandomHexColor(), 1000,btnStart.disabled = true,btnStop.disabled = false);  
};

btnStop.disabled = true;
  
function stopChangeColor() {
  timerId = clearInterval(timerId);
  btnStart.disabled = false;
  btnStop.disabled = true;
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
};


// removeProperty('background')