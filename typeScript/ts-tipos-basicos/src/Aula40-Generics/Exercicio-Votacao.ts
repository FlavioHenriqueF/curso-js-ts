type VotationOption = {
  option: string;
  numberOfvotes: number;
};

export class Votation {
  private _votationOptions: VotationOption[] = [];

  constructor(public details: string) {}

  addVotationOption(votationOption: VotationOption): void {
    this._votationOptions.push(votationOption);
  }

  vote(votationIndex: number): void {
    if (!this._votationOptions[votationIndex]) return;
    this._votationOptions[votationIndex].numberOfvotes += 1;
  }

  get votationOptions(): VotationOption[] {
    return this._votationOptions;
  }
}

export class VotationApp {
  private votations: Votation[] = [];

  addVotation(votation: Votation): void {
    this.votations.push(votation);
  }

  showVotations(): void {
    for (const votation of this.votations) {
      console.log(votation.details);
      for (const votationOption of votation.votationOptions) {
        console.log(votationOption.option, votationOption.numberOfvotes);
      }
      console.log('###');
      console.log('');
    }
  }
}

const votation1 = new Votation('Qual sua lingaguem de programação favorita ?');
votation1.addVotationOption({ option: 'Python', numberOfvotes: 0 });
votation1.addVotationOption({ option: 'JavaScript', numberOfvotes: 0 });
votation1.addVotationOption({ option: 'TypeScript', numberOfvotes: 0 });

votation1.vote(1);
votation1.vote(1);
votation1.vote(1);
votation1.vote(2);
votation1.vote(2);
votation1.vote(2);

const votationApp = new VotationApp();
votationApp.addVotation(votation1);

const votation2 = new Votation('Qual sua cor favorita  ?');
votation2.addVotationOption({ option: 'Vermelho', numberOfvotes: 0 });
votation2.addVotationOption({ option: 'Azul', numberOfvotes: 0 });
votation2.addVotationOption({ option: 'Amarelo', numberOfvotes: 0 });
votation2.vote(1);
votation2.vote(2);
votation2.vote(2);
votation2.vote(2);
votationApp.addVotation(votation2);

votationApp.showVotations();

// export class Urna {
//   public qtdVotos = 0;
//   constructor(public nome: string) {}

//   votar(): void {
//     this.qtdVotos++;
//   }
// }

// export class votApp {
//   private pergunta = '';
//   private opcoes: Urna[] = [];
//   private totalVotos = 0;

//   setquestion(question: string): void {
//     this.pergunta = question;
//   }

//   setOptions(...options: string[]): void {
//     for (const option of options) {
//       const optionUrna = new Urna(option);
//       this.opcoes.push(optionUrna);
//     }
//   }

//   votar(votos: string): void {
//     for (const opcao of this.opcoes) {
//       if (opcao.nome === votos) {
//         opcao.votar();
//         this.totalVotos++;
//       }
//     }
//   }

//   mostrarVotos(): void {
//     console.log(`Pergunta: ${this.pergunta}`);
//     console.log(`Qtd de votos totais: ${this.totalVotos}`);
//     for (const i in this.opcoes) {
//       console.log(`Opção: ${this.opcoes[i].nome} | ${this.opcoes[i].qtdVotos}`);
//     }
//   }
// }

// const votar = new votApp();
// votar.setquestion('Qual sua linguagem Favorita ?');
// votar.setOptions('Python', 'Java', 'JavaScript', 'PHP');
// votar.votar('JavaScript');
// votar.votar('Java');
// votar.votar('JavaScript');
// votar.votar('Java');
// votar.votar('JavaScript');
// votar.votar('Java');
// votar.mostrarVotos();
