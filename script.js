const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

const firstJob = "1 Nov 2023";

function countdown() {
  const firstJobDay = new Date(firstJob); //cria um novo objeto Date e o inicializa com a data e hora contidas na string firstJob.
  const currentDate = new Date();

  const totalSeconds = (firstJobDay - currentDate) / 1000; //Divide-se por mil para converter de milissegundos para segundos. Diferença entre duas datas em segundos

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
  //garantindo que valores menores que 10 tenham dois dígitos
  return time < 10 ? `0${time}` : time; //faz uso de uma estrutura condicional ternária (maneira compacta de escrever uma instrução if-else)
  //USANDO IF
  // function formatTime(time) {
  //   if (time < 10) {
  //     return `0${time}`;
  //   } else {
  //     return time.toString();
  //   }
  // }
}

//Initial call
countdown();

setInterval(countdown, 1000);

// function textChange() {
//   const textChange = document.getElementById("CongratMessage");

//   textChange.innerHTML =
//     "Congratulations! Keep studying that the first job is coming.";

//   textChange.classList.add("custom-font-size");
// }
// Função para manipular o clique nos botões
