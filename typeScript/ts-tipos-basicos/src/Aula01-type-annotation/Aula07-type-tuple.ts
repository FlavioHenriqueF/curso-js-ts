const dadosCliente2: readonly [number, string, string?] = [1, 'luiz'];
const dadosCliente3: [number, string, string?] = [1, 'luiz'];
const dadosCliente4: [number, string, ...string[]] = [1, 'Flavio'];

console.log(dadosCliente2);
console.log(dadosCliente3);
console.log(dadosCliente4);

// Readonly

const array1: readonly string[] = ['luiz', 'otavio'];
const array2: ReadonlyArray<string> = ['Flavio', 'henrique'];

console.log(array1);
console.log(array2);
