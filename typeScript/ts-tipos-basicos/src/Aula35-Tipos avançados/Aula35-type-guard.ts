export function add(a: unknown, b: unknown) {
  return typeof a === 'number' && typeof b === 'number' ? a + b : `${a}-${b}`;
}

console.log(add(1, 5));
console.log(add('a', 'b'));

type Pessoa = { tipo: 'pessoa'; nome: string };
type Animal = { tipo: 'animal'; cor: string };
type PessoaOuAnimal = Pessoa | Animal;

export class Aluno implements Pessoa {
  // eslint-disable-next-line @typescript-eslint/prefer-as-const
  tipo: 'pessoa' = 'pessoa';
  constructor(public nome: string) {}
}

function mostraNome(obj: PessoaOuAnimal): void {
  // if ('nome' in obj) console.log(obj.nome);
  // if (obj instanceof Aluno) console.log(obj.nome);
  if (obj.tipo === 'pessoa') return console.log(obj.nome);
  if (obj.tipo === 'animal') return console.log('Isso é um animal', obj.cor);
}

mostraNome(new Aluno('Flavio'));
mostraNome({ tipo: 'animal', cor: 'Branco' });
