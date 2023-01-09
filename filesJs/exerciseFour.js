const relogio = document.querySelector(".relogio");
const inicar = document.querySelector(".iniciar");
const pausar = document.querySelector(".pausar");
const zerar = document.querySelector(".zerar");
let contadorsegundos = 0;
let contadorminutos = 0;
let contadorhoras = 0;

function formataSegundos(segundos) {
  if (segundos <= 9) {
    return `0${segundos}`;
  } else {
    return segundos;
  }
}

function paraContador(para) {
  pausar.addEventListener("click", function () {
    relogio.style.color = "#FF0000";
    clearInterval(para);
  });
}
function zeraContador(zera) {
  zerar.addEventListener("click", function () {
    clearInterval(zera);
    relogio.style.color = "#00FF00";
    relogio.innerHTML = `00:00:00`;
    contadorsegundos = 0;
    contadorminutos = 0;
    contadorhoras = 0;
  });
}

inicar.addEventListener("click", function (e) {
  relogio.style.color = "#000000";
  const crono = setInterval(function () {
    contadorsegundos += 1;
    const segundin = formataSegundos(contadorsegundos);
    const minutin = formataSegundos(contadorminutos);
    const horin = formataSegundos(contadorhoras);
    if (contadorsegundos >= 59) {
      contadorsegundos = 0;
      contadorminutos += 1;
    }
    if (contadorminutos >= 59) {
      contadorminutos = 0;
      contadorhoras = 1;
    }
    relogio.innerHTML = `${horin}:${minutin}:${segundin}`;
    crono;
    paraContador(crono);
    zeraContador(crono);
  }, 1000);
});
