const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

const firstJob = "1 Nov 2023";

function countdown() {
  const firstJobDay = new Date(firstJob);
  const currentDate = new Date();

  const totalSeconds = (firstJobDay - currentDate) / 1000; //Divide-se por mil para converter de milissegundos para segundos

  const days = Math.floor(totalSeconds / 86400); //86400: total de segundos em um dia
  const hours = Math.floor((totalSeconds % 86400) / 3600); //3600: número de segundos em uma hora
  const minutes = Math.floor((totalSeconds % 3600) / 60); //a divisão é feita por 3600 para nos dá o restante de segundos não contabilizados nas horas inteiras. A divisão por 60 é feita para nos dar esse valor em minutos.
  const seconds = Math.floor(totalSeconds % 60); //calculando os segundos restantes após descontar minutos inteiros e horas inteiras do total de segundos.

  daysEl.innerHTML = days;
  hoursEl.innerHTML = formatTime(hours);
  minutesEl.innerHTML = formatTime(minutes);
  secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? `0 ${time}` : time;
}

//Initial call
countdown();

setInterval(countdown, 1000);
