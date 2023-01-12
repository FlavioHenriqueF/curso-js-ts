const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const par = numbers
  .filter((value) => value % 2 === 0)
  .map((value) => value * 2)
  .reduce((ac, value) => ac + value);

console.log(par);

const persons = [
  { name: "luiz", age: 62 },
  { name: "Maria", age: 23 },
  { name: "Eduardo", age: 105 },
  { name: "Leticia", age: 19 },
  { name: "Rosana", age: 64 },
  { name: "Wallace", age: 63 },
];
