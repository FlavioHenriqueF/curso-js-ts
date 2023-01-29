type MeuTipo = number;

const arrayNumeros: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arrayNumeros);

async function promiseAsync() {
  return 1;
}

promiseAsync().then((response) => console.log(response + 1));

function myPromise(): Promise<MeuTipo | number> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });
}

myPromise().then((response) => console.log(response + 1));
