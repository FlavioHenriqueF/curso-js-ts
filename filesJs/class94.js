function Product(name, price) {
  this.name = name;
  this.price = price;
}
Product.prototype.increase = function (amount) {
  this.price += amount;
};
Product.prototype.discount = function (amount) {
  this.price -= amount;
};

function Tshirt(name, price, color) {
  Product.call(this, name, price);
  this.color = color;
}

Tshirt.prototype = Object.create(Product.prototype);
Tshirt.prototype.constructor = Tshirt;

Tshirt.prototype.increase = function (percentage) {
  this.price = this.price + this.price * (percentage / 100);
};

function Mug(name, price, material, stok) {
  Product.call(this, name, price);
  this.material = material;

  Object.defineProperty(this, "stok", {
    enumerable: true,
    configurable: false,
    get: function () {
      return stok;
    },

    set: function (value) {
      if (typeof value !== "number") return;
      stok = value;
    },
  });
}

Mug.prototype = Object.create(Product.prototype);
Mug.prototype.constructor = Mug;

const tShirt = new Tshirt("regatta", 7.5, "Black");
const mug = new Mug("Homem-aranha", 13, "Plastic", 5);
mug.stok = 100;
tShirt.increase(100);
console.log(mug);
console.log(mug.stok);
console.log(tShirt);
console.log(Product);
