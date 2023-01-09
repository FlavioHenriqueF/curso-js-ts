function showHours(n) {
  let date = new Date(01, 01, 1970, 12, 58, 12);

  return date.toLocaleTimeString("pt-BR", {
    hour12: false,
  });
}

const timer = setInterval(() => {
  console.log(showHours());
}, 1000);

setTimeout(() => {
  clearInterval(timer);
}, 10000);
