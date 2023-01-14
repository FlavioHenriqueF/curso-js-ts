function random(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function espera(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== "string") reject(false);
    setTimeout(() => {
      resolve(msg);
    }, tempo);
  });
}

espera("Frase 1", random(1, 3))
  .then((resposta) => {
    console.log(resposta);
    return espera("Frase 2", random(1, 3));
  })
  .then((resposta) => {
    console.log(resposta);
    return espera(2222, random(1, 3));
  })
  .then((resposta) => {
    console.log(resposta);
  })
  .then(() => {
    console.log("Ultimo a  ser exibido.");
  })
  .catch((e) => {
    console.log("ERRO", e);
  });

console.log("Isso vem primeiro");
