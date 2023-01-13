class ValidCpf {
  constructor(cpfSend) {
    Object.defineProperty(this, "cpfClean", {
      writable: false,
      enumerable: true,
      configurable: false,
      value: cpfSend.replace(/\D+/g, ""),
    });
  }

  isSequence() {
    return this.cpfClean[0].repeat(this.cpfClean.length) === this.cpfClean;
  }

  valid() {
    if (!this.cpfClean) return false;
    if (typeof this.cpfClean === "undefined") return false;
    if (this.cpfClean.length !== 11) return false;
    if (this.isSequence()) return false;

    const partialCpf = this.cpfClean.slice(0, -2);
    const digit1 = ValidCpf.createDigit(partialCpf);
    const digit2 = ValidCpf.createDigit(partialCpf + digit1);

    const newCpf = partialCpf + digit1 + digit2;
    return newCpf === this.cpfClean;
  }

  static createDigit(value) {
    let loop = Array.from(value);
    let i = loop.length + 1;
    let total = [];

    loop.forEach((value) => {
      total.push(value * i);
      i--;
      return total;
    });

    return ValidCpf.calcDigit(total);
  }

  static calcDigit(value) {
    const calc = value.reduce((ac, value) => (ac += Number(value)));
    const digit = 11 - (calc % 11);
    return digit > 9 ? "0" : String(digit);
  }
}

// const cpf = new ValidCpf("070.987.720-03");

// if (cpf.valid()) {
//   console.log("CPF válido");
// } else {
//   console.log("CPF inválido");
// }
