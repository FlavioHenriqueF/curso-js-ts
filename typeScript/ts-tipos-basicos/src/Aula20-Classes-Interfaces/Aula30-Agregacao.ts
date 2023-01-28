export class CarrinhoDeCompras {
  private readonly produtos: Produto[] = [];

  adicionarProduto(...produtos: Produto[]): void {
    for (const produto of produtos) {
      this.produtos.push(produto);
    }
  }

  quantidade(): number {
    return this.produtos.length;
  }

  valorTotal(): number {
    return Math.round(
      this.produtos.reduce((acc, produto) => acc + produto.preco, 0),
    );
  }
}

export class Produto {
  constructor(public nome: string, public preco: number) {}
}

const produto1 = new Produto('Camiseta', 49.9);
const produto2 = new Produto('Caneca', 10.0);
const produto3 = new Produto('Caneta', 1.9);

const carrinhoDecompras = new CarrinhoDeCompras();
carrinhoDecompras.adicionarProduto(produto1, produto2, produto3);
console.log(carrinhoDecompras.valorTotal());
