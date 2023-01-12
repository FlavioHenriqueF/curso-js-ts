// Define Property - define Properties

function Products(name, price, stok) {
  Object.defineProperty(this, "stok", {
    enumerable: true, // Mostra a chave
    value: stok, // Valor da chave
    writable: true, // Pode alterar o valor sim ou não
    configurable: true, // Configuravel sim ou não
  });

  Object.defineProperties(this, {
    name: {
      enumerable: true, // Mostra a chave
      value: name, // Valor da chave
      writable: true, // Pode alterar o valor sim ou não
      configurable: true, // Configuravel sim ou não
    },
    price: {
      enumerable: true, // Mostra a chave
      value: price, // Valor da chave
      writable: true, // Pode alterar o valor sim ou não
      configurable: true, // Configuravel sim ou não
    },
  });
}

const p1 = new Products("Camiseta", 20, 3);

console.log(p1);

for (let key in p1) {
  console.log(key);
}
