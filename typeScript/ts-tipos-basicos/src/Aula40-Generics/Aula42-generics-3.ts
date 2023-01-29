interface PessoaProcolo<T = string, U = number> {
  nome: T;
  sobrenome: T;
  idade: U;
}

const aluno1: PessoaProcolo<string, number> = {
  nome: 'Flavio',
  sobrenome: 'henrique',
  idade: 18,
};

const aluno2: PessoaProcolo<boolean, number> = {
  nome: false,
  sobrenome: true,
  idade: 18,
};

const aluno3: PessoaProcolo = {
  nome: 'Flavio',
  sobrenome: 'henrique',
  idade: 18,
};

console.log(aluno1, aluno2, aluno3);
