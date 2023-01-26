/* eslint-disable */

// Tipos básicos (Aqui ocorre interfêrencia de tipos)

let nome: string = 'Flavio';
let idade: number = 18; // 10, 1.57 não importa qual numero
let adulto: boolean = false; // true ou false
let simbolo: symbol = Symbol('qualquer-symbol'); // symbol
// let big: bigint = 10n;  bigint

// Arrays

let numbersArray: Array<number> = [1, 2, 3, 4];
let numberArray2: number[] = [1, 2, 3, 4];
let arrayString: Array<string> = ['Flavio', 'henrique'];

// Objects

export let person: {
  name: string;
  age: number;
  adult?: boolean /* AO Utilizar o sinal de ?. a propriedade se torna opcional*/;
};

// Functions

function sum(x: number, y: number): number {
  return x + y;
} // Tipagem de função

const sum2: (x: number, y: number) => number = (x, y) => x + y;
