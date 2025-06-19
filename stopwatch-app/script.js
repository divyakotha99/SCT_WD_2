let startTime, updatedTime, difference = 0, tInterval;
let running = false;
let laps = [];

function startStopwatch() {
  if (!running) {
    startTime = new Date().getTime() - difference;
    tInterval = setInterval(updateDisplay, 10); // Update every 10ms
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

  let minutes = Math.floor(difference / (1000 * 60));
  let seconds = Math.floor((difference % (1000 * 60)) / 1000);
  let milliseconds = Math.floor((difference % 1000) / 10); // in hundredths (0–99)

  const displayTime =
    (minutes < 10 ? '0' + minutes : minutes) + ':' +
    (seconds < 10 ? '0' + seconds : seconds) + ':' +
    (milliseconds < 10 ? '0' + milliseconds : milliseconds);

  document.getElementById('display').innerText = displayTime;
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
