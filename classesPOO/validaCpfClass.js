class ValidCpf {
  constructor(cpf) {
    this.cpf = cpf;
    this.isValid = this.toConvert(cpf);
  }

  toConvert() {
    const cpfClean = this.cpf.replace(/\D+/g, "");
    if (this.isSequence(cpfClean)) return false;
    return this.valid(cpfClean);
  }

  valid(value) {
    if (typeof value === "undefined") return false;
    if (value.length !== 11) return false;

    const partialCpf = value.slice(0, -2);
    const digit1 = this.createDigit(partialCpf);
    const digit2 = this.createDigit(partialCpf + digit1);

    const newCpf = partialCpf + digit1 + digit2;
    return newCpf === value;
  }

  createDigit(value) {
    let loop = Array.from(value);
    let i = loop.length + 1;
    let total = [];

    loop.forEach((value) => {
      total.push(value * i);
      i--;
      return total;
    });

    return this.calcDigit(total);
  }

  calcDigit(value) {
    const calc = value.reduce((ac, value) => (ac += Number(value)));
    const digit = 11 - (calc % 11);
    return digit > 9 ? "0" : String(digit);
  }

  isSequence(value) {
    return value[0].repeat(value.length) === value;
  }
}

const cpf = new ValidCpf("705.484.450-52");

if (cpf) {
  console.log("Valid Cpf");
} else {
  console.log("Invalid Cpf");
}
