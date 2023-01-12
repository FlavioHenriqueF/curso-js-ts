const _speed = Symbol("Velocity");
class Car {
  constructor(name) {
    this.name = name;
    this[_speed] = 0;
  }

  set speed(value) {
    if (typeof value !== "number") return;
    if (value >= 100 || value <= 0) return;
    this[_speed] = value;
  }

  get speed() {
    return this[_speed];
  }

  speedUp() {
    if (this[_speed] >= 100) return;
    this[_speed]++;
  }

  brake() {
    if (this[_speed] <= 0) return;
    this[_speed]--;
  }
}

const car1 = new Car("Civic");

for (let i = 0; i < 200; i++) {
  car1.speedUp();
}

class Pessoa {
  constructor(name, lastName) {
    this.name = name;
    this.lastName = lastName;
  }

  get fullName() {
    return this.name + " " + this.lastName;
  }

  set fullName(value) {
    value = value.split(" ");
    this.name = value.shift();
    this.lastName = value.join(" ");
  }
}

const p1 = new Pessoa("Flavio", "Henrique");
p1.fullName = "Flavio Henrique Lima Franco";
console.log(p1.name);
console.log(p1.lastName);
