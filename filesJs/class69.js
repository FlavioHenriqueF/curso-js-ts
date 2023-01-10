const count = function (operator, accumulator, ...numbers) {
  for (let number of numbers) {
    if (operator === "+") accumulator += number;
    if (operator === "-") accumulator -= number;
    if (operator === "/") accumulator /= number;
    if (operator === "*") accumulator *= number;
  }

  console.log(accumulator);
};

count("+", 1, 20, 30, 40, 50);

function createMultiplier(multiplier) {
  return function (n) {
    return n * multiplier;
  };
}

const duplicate = createMultiplier(2);
const triples = createMultiplier(2);
const quadruple = createMultiplier(2);

console.log(duplicate(3));
console.log(triples(2));
console.log(quadruple(10));

const name = "Luiz";

function sayName() {
  console.log(name);
}

function useSayName() {
  const name = "otavio";
  sayName();
}

useSayName();
