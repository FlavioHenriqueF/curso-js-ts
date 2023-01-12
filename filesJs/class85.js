const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const double = numbers.map((value) => value * 2);
console.log(double);

const persons = [
  { name: "luiz", age: 62 },
  { name: "Maria", age: 23 },
  { name: "Eduardo", age: 55 },
  { name: "Leticia", age: 19 },
  { name: "Rosana", age: 32 },
  { name: "Wallace", age: 47 },
];

const names = persons.map((index) => index.name);
const age = persons.map((index) => ({ age: index.age }));
const id = persons.map((value, index) => {
  const newArray = { ...value };
  newArray.id = index;
  return newArray;
});
console.log(persons);
console.log(id);
