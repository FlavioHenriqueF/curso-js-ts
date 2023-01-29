type ObterChaveFn = <O, K extends keyof O>(objeto: O, key: K) => O[K];

const obterChave: ObterChaveFn = (objeto, key) => objeto[key];

const animal = {
  cor: 'branco',
  tipo: 'cachorro',
  idade: 10,
};

const cor = obterChave(animal, 'cor');
const tipo = obterChave(animal, 'tipo');

console.log(tipo, cor, obterChave(animal, 'idade'));
