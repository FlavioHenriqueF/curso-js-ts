const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total = numbers.reduce((accumulator, value) => {
  if (value % 2 === 0) accumulator += value;
  return accumulator;
}, 0);

const persons = [
  { name: "luiz", age: 62 },
  { name: "Maria", age: 23 },
  { name: "Eduardo", age: 105 },
  { name: "Leticia", age: 19 },
  { name: "Rosana", age: 64 },
  { name: "Wallace", age: 63 },
];

const older = persons.reduce((accumulator, value) => {
  if (accumulator.age > value.age) return accumulator;
  return value;
});

console.log(older);
