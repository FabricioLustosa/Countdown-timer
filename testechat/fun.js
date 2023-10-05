let timeRemaining = 300; // Tempo inicial em segundos (5 minutos)
let timeToDeduct = 0; // Tempo a ser deduzido inicialmente

function updateTimerDisplay() {
  const daysEl = document.getElementById("days");
  const hoursEl = document.getElementById("hours");
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");

  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;

  daysEl.innerHTML = "0";
  hoursEl.innerHTML = "0";
  minutesEl.innerHTML = formatTime(minutes);
  secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

function deductTime() {
  if (timeToDeduct > 0) {
    timeRemaining -= timeToDeduct;

    if (timeRemaining < 0) {
      timeRemaining = 0;
    }

    updateTimerDisplay();
    timeToDeduct = 0;
  }
}

// Event listeners para os botões de conhecimento
document
  .getElementById("easy-knowledge")
  .addEventListener("click", function () {
    timeToDeduct = parseInt(this.getAttribute("data-time-to-deduct"));
  });

document
  .getElementById("medium-knowledge")
  .addEventListener("click", function () {
    timeToDeduct = parseInt(this.getAttribute("data-time-to-deduct"));
  });

document
  .getElementById("hard-knowledge")
  .addEventListener("click", function () {
    timeToDeduct = parseInt(this.getAttribute("data-time-to-deduct"));
  });

// Chamada inicial para atualizar a exibição do contador
updateTimerDisplay();

// Função para atualizar o contador a cada segundo
setInterval(function () {
  if (timeRemaining > 0) {
    timeRemaining -= 1;
    updateTimerDisplay();
  }
}, 1000);
