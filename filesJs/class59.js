const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let number of numbers) {
  if (number === 2) {
    console.log("jumped two");
    continue;
  }

  console.log(number);
}
