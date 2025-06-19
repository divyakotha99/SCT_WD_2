let startTime, updatedTime, difference, tInterval;
let running = false;
let laps = [];

function startStopwatch() {
  if (!running) {
    startTime = new Date().getTime() - (difference || 0);
    tInterval = setInterval(updateDisplay, 1000);
    running = true;
  }
}

function pauseStopwatch() {
  if (running) {
    clearInterval(tInterval);
    difference = new Date().getTime() - startTime;
    running = false;
  }
}

function resetStopwatch() {
  clearInterval(tInterval);
  running = false;
  difference = 0;
  document.getElementById('display').innerText = '00:00:00';
  document.getElementById('laps').innerHTML = '';
  laps = [];
}

function updateDisplay() {
  updatedTime = new Date().getTime();
  difference = updatedTime - startTime;

  let hours = Math.floor(difference / (1000 * 60 * 60));
  let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((difference % (1000 * 60)) / 1000);

  document.getElementById('display').innerText =
    (hours < 10 ? '0' + hours : hours) + ':' +
    (minutes < 10 ? '0' + minutes : minutes) + ':' +
    (seconds < 10 ? '0' + seconds : seconds);
}

function recordLap() {
  if (running) {
    const lapTime = document.getElementById('display').innerText;
    laps.push(lapTime);
    const lapItem = document.createElement('li');
    lapItem.textContent = `Lap ${laps.length}: ${lapTime}`;
    document.getElementById('laps').appendChild(lapItem);
  }
}
