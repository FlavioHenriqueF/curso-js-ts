export class Empresa {
  readonly nome: string;
  protected readonly colaboradores: Colaborador[] = [];
  private readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  adicionaColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  mostraColaboradores(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }
}

export class PaoDeAcucar extends Empresa {
  constructor() {
    super('Pão de açucar', '11.111.111/0001-11');
  }

  popColaboradores(): Colaborador | null {
    const colaboradores = this.colaboradores.pop();
    if (colaboradores) return colaboradores;
    return null;
  }
}

// Aqui eu sou obrigado a falar se é public private ou protected
export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

const empresa1 = new PaoDeAcucar();
const colaborador1 = new Colaborador('Jõao', 'Pinheiro');
const colaborador2 = new Colaborador('Flavio', 'Henrique');
const colaborador3 = new Colaborador('Pedro', 'Franco');
empresa1.adicionaColaborador(colaborador1);
empresa1.adicionaColaborador(colaborador2);
empresa1.adicionaColaborador(colaborador3);
empresa1.popColaboradores();
empresa1.mostraColaboradores();
