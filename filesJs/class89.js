// const person1 = new Object();
// person1.name = "Flavio";
// person1.lastName = "henrique";
// person1.age = 19;
// person1.sayName = function () {
//   return `${this.name} is saying your name`;
// };
// person1.getDate = function () {
//   const date = new Date();
//   return date.getFullYear() - this.age;
// };

// for (let key in person1) {
//   console.log(person1[key]);
// }

function Person(name, lastName) {
  this.name = name;
  this.lastName = lastName;

  Object.freeze(this);
}

const p1 = new Person("Flavio", "Henrique");
Object.freeze(p1);
p1.name = "FlavinBAO";
console.log(p1);
