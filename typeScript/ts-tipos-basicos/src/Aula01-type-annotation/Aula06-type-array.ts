export function multArgs(...args: Array<number>): number {
  return args.reduce((ac, value) => ac * value, 1);
}

export function concat(...args: string[]): string {
  return args.reduce((acc, value) => acc + value);
}
export function toUpperCase(...args: string[]): string[] {
  return args.map((valor) => valor.toUpperCase());
}

const result = multArgs(1, 2, 3);
const concat1 = concat('a', 'b', 'c');
const uppercase = toUpperCase('a', 'b', 'c');
console.log(result);
console.log(concat1);
console.log(uppercase);
