function ValidaCPF(cpfEnviado) {
  Object.defineProperty(this, "cpfLimpo", {
    enumerable: true,
    get: function () {
      return cpfEnviado.replace(/\D+/g, "");
    },
  });
}

ValidaCPF.prototype.valida = function () {
  if (typeof this.cpfLimpo === "undefined") return false;
  if (this.cpfLimpo.length !== 11) return false;
  if (this.isSequencia()) return false;

  const cpfParcial = this.cpfLimpo.slice(0, -2);
  const digito1 = this.criarDigito(cpfParcial);
  const digito2 = this.criarDigito(cpfParcial + digito1);

  const novoCpf = cpfParcial + digito1 + digito2;
  return novoCpf === this.cpfLimpo;
};

ValidaCPF.prototype.criarDigito = function (numbers) {
  let loop = Array.from(numbers);
  let i = loop.length + 1;
  let total = [];

  loop.forEach((value) => {
    total.push(value * i);
    i--;
    return total;
  });

  return this.calcularDigit(total);
};

ValidaCPF.prototype.calcularDigit = function (value) {
  const calc = value.reduce((ac, value) => (ac += Number(value)), 0);
  const digito = 11 - (calc % 11);
  return digito > 9 ? "0" : String(digito);
};

ValidaCPF.prototype.isSequencia = function () {
  return this.cpfLimpo[0].repeat(this.cpfLimpo.length) === this.cpfLimpo;
};

const cpf = new ValidaCPF("705.484.450-52");

if (cpf.valida()) {
  console.log("Cpf Válido");
} else {
  console.log("Cpf inválido");
}
