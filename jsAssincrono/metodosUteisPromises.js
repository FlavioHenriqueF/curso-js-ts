// Promise.all  Promise.race   Promise.resolve Promise.reject

function random(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function espera(msg, tempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof msg !== "string") {
        reject("Cai no sorriso dela");
        return;
      }
      resolve(msg.toUpperCase() + " - Passei na promise");
      return;
    }, tempo);
  });
}

function downloadPage() {
  const emCache = true;

  if (emCache) {
    return Promise.reject("Página em cache");
  } else {
    return espera("Baixei a página", 3000);
  }
}

downloadPage()
  .then((dadospagina) => {
    console.log(dadospagina);
  })
  .catch((e) => console.log("ERRO", e));
