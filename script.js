const startTimer = document.getElementById("timer-start-button");
const pauseTimer = document.getElementById("timer-pause-button");
const restartTimer = document.getElementById("timer-restart-button");

const timerDisplayMin = document.getElementById("timer-display-minutes");
const timerDisplaySec = document.getElementById("timer-display-seconds");
const timerBar = document.getElementById("timer-bar");

const breakCheckbox = document.getElementById("break-checkbox");
const breakDisplayMin = document.getElementById("break-display-minutes");
const breakDisplaySec = document.getElementById("break-display-seconds");
const breakBar = document.getElementById("break-bar");

const checkboxOne = document.getElementById("checkbox-1 checkbox");
const checkboxTwo = document.getElementById("checkbox-2 checkbox");
const checkboxThree = document.getElementById("checkbox-3 checkbox");
const checkboxFour = document.getElementById("checkbox-4 checkbox");

let seconds = 00;
let minutes = 00;
let secondsBreak = 00;
let minutesBreak = 00;
let stopWatchTimer;
let checkbox = 0;
let running;
let paused;

startTimer.addEventListener("click", function stopWatch() {
  stopWatchTimer = stopWatch;

  if (!running) {
    stopWatchFunction = setInterval(stopWatchCounter, 1000);
    running = true;
    paused = false;
  }
});

function stopWatchCounter() {
  running = true;
  paused = false;
  seconds += 1;
  timerDisplayMin.innerHTML = minutes;
  timerDisplaySec.innerHTML = seconds;
  timerBar.style.animation = "load 1500s linear forwards";
  timerBar.style.animationPlayState = "running";
  breakBar.style.animationPlayState = "running";
 
  if (seconds === 59) {
    minutes += 1;
  }
  
  if (seconds === 60) {
    
    seconds = 00;
  }

  if (seconds < 10) {
    timerDisplaySec.innerHTML = "0" + seconds;
  }

  if (minutes < 10) {
    timerDisplayMin.innerHTML = "0" + minutes;
  }

  if (minutes >= 25) {
    timerDisplayMin.innerHTML = 25;
    timerDisplaySec.innerHTML = "00";
    timerBar.style.animation = "load-restart 0s linear forwards";
    secondsBreak += 1;
    breakDisplaySec.innerHTML = secondsBreak;
    breakDisplayMin.innerHTML = minutesBreak;
    breakBar.style.animation = "load 300s linear forwards";
  }

  if (secondsBreak === 60) {
    secondsBreak = 00;
    minutesBreak += 1;
    
  }

  if (secondsBreak < 10) {
    breakDisplaySec.innerHTML = "0" + secondsBreak;
  }

  if (minutesBreak < 10) {
    breakDisplayMin.innerHTML = "0" + minutesBreak;
  }
  console.log(secondsBreak);

  if (minutesBreak >= 5) {
    seconds = 00;
    minutes = 00;
    secondsBreak = 00;
    minutesBreak = 00;
    breakDisplayMin.innerHTML = "05";
    breakDisplaySec.innerHTML = "00";
    timerDisplayMin.innerHTML = "25";
    timerDisplaySec.innerHTML = "00";
    breakBar.style.animation = "load-restart 0s linear forwards";
    checkbox += 1;

    if (checkbox === 1) {
      checkboxOne.innerHTML = "&#10003;";
      checkboxOne.style.fontSize = "60px";
      checkboxOne.style.color = "#953B3B";
    } else if (checkbox === 2) {
      checkboxTwo.innerHTML = "&#10003;";
      checkboxTwo.style.fontSize = "60px";
      checkboxTwo.style.color = "#953B3B";
    } else if (checkbox === 3) {
      checkboxThree.innerHTML = "&#10003;";
      checkboxThree.style.fontSize = "60px";
      checkboxThree.style.color = "#953B3B";
    } else if (checkbox === 4) {
      checkboxFour.innerHTML = "&#10003;";
      checkboxFour.style.fontSize = "60px";
      checkboxFour.style.color = "#953B3B";
      alert("Now take a 15 minutes break. When ready, press restart!");
    }
  }
}

pauseTimer.addEventListener("click", function () {
  if (!paused) {
    clearInterval(stopWatchFunction);
    timerBar.style.animationPlayState = "paused";
    breakBar.style.animationPlayState = "paused";
    paused = true;
    running = false;
  }
});

restartTimer.addEventListener("click", function () {
  seconds = 00;
  minutes = 00;
  secondsBreak = 00;
  minutesBreak = 00;
  breakDisplayMin.innerHTML = "05";
  breakDisplaySec.innerHTML = "00";
  timerDisplayMin.innerHTML = "25";
  timerDisplaySec.innerHTML = "00";
  clearInterval(stopWatchFunction);
  checkboxOne.innerHTML = "First round!";
  checkboxOne.style.fontSize = "16px";
  checkboxOne.style.color = "black";
  checkboxTwo.innerHTML = "Second round!";
  checkboxTwo.style.fontSize = "16px";
  checkboxTwo.style.color = "black";
  checkboxThree.innerHTML = "Third round!";
  checkboxThree.style.fontSize = "16px";
  checkboxThree.style.color = "black";
  checkboxFour.innerHTML = "Final round!";
  checkboxFour.style.fontSize = "16px";
  checkboxFour.style.color = "black";
  timerBar.style.animation = "load-restart 0s linear forwards";
  breakBar.style.animation = "load-restart 0s linear forwards";
  running = false;
  paused = true;
});