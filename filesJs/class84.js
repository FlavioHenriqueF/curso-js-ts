// const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
// const numbersFiltered = numbers.filter((value) => value > 10);
// console.log(numbersFiltered);

const persons = [
  { name: "luiz", age: 62 },
  { name: "Maria", age: 23 },
  { name: "Eduardo", age: 55 },
  { name: "Leticia", age: 19 },
  { name: "Rosana", age: 32 },
  { name: "Wallace", age: 47 },
];

const person = persons.filter((index) => index.name.length >= 6);
const age = persons.filter((index) => index.age > 50);
const lastA = persons.filter((index) => index.name.toLowerCase().endsWith("a"));

console.log(person);
console.log(age);
console.log(lastA);
