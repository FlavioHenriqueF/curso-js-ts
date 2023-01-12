class Pessoa {
  constructor(name, lastName) {
    this.name = name;
    this.lastName = lastName;
  }

  falar() {
    console.log(`${this.name}.....`);
  }
}

function Person2(name, lastName) {
  this.name = name;
  this.lastName = lastName;
}

Person2.prototype.falar = function () {
  console.log(`${this.name} esta falando`);
};

const p1 = new Pessoa("Name", "LastName");
const p2 = new Person2("Name", "LastName");

console.log(p1);
console.log(p2);
