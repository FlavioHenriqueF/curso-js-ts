function Product(name, price) {
  this.name = name;
  this.price = price;
}

Product.prototype.discount = function (percentual) {
  this.price = this.price - this.price * (percentual / 100);
};

Product.prototype.increase = function (percentual) {
  this.price = this.price + this.price * (percentual / 100);
};

const p1 = new Product("Camiseta", 50);

const p2 = {
  name: "Mug",
  price: 15,
};
Object.setPrototypeOf(p2, Product.prototype);

p2.increase(10);

const p3 = Object.create(Product.prototype, {
  price: {
    writable: true,
    configurable: true,
    enumerable: true,
    value: 99,
  },
  size: {
    writable: true,
    configurable: true,
    enumerable: true,
    value: 43,
  },
});

p3.increase(10);
console.log(p3);
