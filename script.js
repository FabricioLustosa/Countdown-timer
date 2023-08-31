const firstJob = "1 Nov 2023";

function countdown() {
  const firstJobDay = new Date(firstJob);
  const currentDate = new Date();

  const totalSeconds = (firstJobDay - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = Math.floor(totalSeconds % 60);

  console.log(days, hours, minutes, seconds);
}

//Initial call
countdown();

setInterval(countdown, 1000);
