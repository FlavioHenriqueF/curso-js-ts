// Superclass
function Conta(agencia, conta, saldo) {
  this.agencia = agencia;
  this.conta = conta;
  this.saldo = saldo;
}

Conta.prototype.sacar = function (value) {
  if (this.saldo < value) {
    console.log(`Saldo insuficiente: ${this.saldo}`);
    return;
  }

  this.saldo -= value;
  this.verSaldo();
};

Conta.prototype.depositar = function (value) {
  this.saldo += value;
  this.verSaldo();
};
Conta.prototype.verSaldo = function () {
  console.log(
    `Ag/c: ${this.agencia}/${this.conta} ` + `Saldo: R$${this.saldo.toFixed(2)}`
  );
};

function ContaCorrente(agencia, conta, saldo, limite) {
  Conta.call(this, agencia, conta, saldo);
  this.limite = limite;
}

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function (value) {
  if (value > this.saldo + this.limite) {
    console.log(`Saldo insuficiente: ${this.saldo}`);
    return;
  }

  this.saldo -= value;
  this.verSaldo();
};

function ContaPoupança(agencia, conta, saldo, limite) {
  Conta.call(this, agencia, conta, saldo);
  this.limite = limite;
}

ContaPoupança.prototype = Object.create(Conta.prototype);
ContaPoupança.prototype.constructor = ContaPoupança;

const contaCorrente = new ContaCorrente(11, 22, 0, 100);
contaCorrente.depositar(10);
contaCorrente.sacar(110);
contaCorrente.sacar(1);

console.log();

const cp = new ContaPoupança(12, 33, 0);
cp.depositar(10);
cp.sacar(10);
cp.sacar(1);
