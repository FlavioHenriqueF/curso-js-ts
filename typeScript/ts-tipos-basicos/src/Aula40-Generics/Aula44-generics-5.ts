export class Pessoa<T, U> {
  constructor(public nome: T, public idade: U) {}
}

export class Pilha<T> {
  private contador = 0;
  private elementos: { [k: number]: T } = {};

  push(elementos: T): void {
    this.elementos[this.contador] = elementos;
    this.contador++;
  }

  pop(): T | void {
    if (this.estaVazia()) return undefined;

    this.contador--;
    const elemento = this.elementos[this.contador];
    delete this.elementos[this.contador];

    return elemento;
  }

  estaVazia(): boolean {
    return this.contador === 0;
  }

  mostraTamanho(): number {
    return this.contador;
  }

  mostrarPilha(): void {
    for (const chave in this.elementos) {
      console.log(this.elementos[chave]);
    }
  }
}

const elemento = new Pilha<number>();
elemento.push(1);
elemento.push(2);
elemento.push(3);
elemento.push(4);
elemento.push(5);
elemento.push(6);
while (!elemento.estaVazia()) {
  console.log(elemento.pop());
}
