function Products(name, price, stok) {
  this.name = name;
  this.price = price;

  let stokPrivate = stok;

  Object.defineProperty(this, "stok", {
    enumerable: true, // Mostra a chave
    // value: stok, // Valor da chave
    // writable: true, // Pode alterar o valor sim ou não
    configurable: true, // Configuravel sim ou não
    get: function () {
      return stokPrivate;
    },
    set: function (value) {
      if (typeof value !== "number") {
        throw new TypeError("Mensagem");
      }
      stokPrivate = value;
    },
  });
}

function createProducts(name) {
  return {
    get name() {
      return name;
    },

    set name(value) {
      value = value.replace("coisa.", "");
      name = value;
    },
  };
}

const p2 = createProducts("Camiseta");
p2.name = "qualquer coisa.";
console.log(p2.name);

// const p1 = new Products("Camiseta", 20, 3);
// console.log(p1);
// p1.stok = "aaaa";
// console.log(p1.stok);
