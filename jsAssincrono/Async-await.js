function random(min = 0, max = 3) {
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

async function resolve() {
  try {
    const fase1 = espera("Fase 1", 1000);
    console.log(fase1);

    setTimeout(() => {
      console.log("Essa promise estava pendente", fase1);
    }, 1100);

    const fase2 = await espera("Fase 2", random());
    console.log(fase2);

    const fase3 = await espera("Fase 3", random());
    console.log(fase3);

    console.log("Terminamos na fase:", fase3);
  } catch (e) {
    console.log(e);
  }
}

// espera("Fase 1", random())
//   .then((res) => {
//     console.log(res);
//     return espera("Fase 2", random());
//   })
//   .then((res) => {
//     console.log(res);
//     return espera("Fase 3", random());
//   })
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));
