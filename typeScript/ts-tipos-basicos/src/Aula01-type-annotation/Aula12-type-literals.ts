// let x = 10;
// x = 0b1010;
// const y = 10;
// const a = 100;

const Person = {
  firstName: 'Flavio' as const,
  lasTname: 'Henrique',
};

function getColor(cor: 'Red' | 'Yellow' | 'Blue'): string {
  return cor;
}

console.log(getColor('Red'));
console.log(Person);
