export class Pessoa {
  constructor(
    private nome: string,
    private sobrenome: string,
    private idade: number,
    private _cpf: string,
  ) {
    this.cpf = _cpf;
  }

  set cpf(cpf: string) {
    console.log('Setter chamado');
    this._cpf = cpf;
  }

  get cpf() {
    console.log('Getter chamado');
    return this._cpf.replace(/\D/g, '');
  }
}

const pessoa = new Pessoa('Flavio', 'Henrique', 18, '000.000.000-00');
pessoa.cpf = '123.456.789-00';
console.log(pessoa.cpf);
