export function isNumber(value: unknown): value is number {
  return typeof value === 'number';
}

export function soma<T>(...args: T[]): number {
  const retorno = args.reduce((acc, value) => {
    if (isNumber(acc) && isNumber(value)) {
      return acc + value;
    }
    return acc;
  }, 0);

  return retorno;
}

console.log(soma(...[1, 2, 3, 4, 'a', 'b', 'c', 1]));
console.log(soma('a', 'b'));
