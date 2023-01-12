function CpfIsValid(cpf) {
  const verificar = cpf;
  const cpfClean = Array.from(cpf.replace(/\D+/g, "")).slice(0, -2);

  const digit1 = calcular(cpfClean, 10);
  cpfClean.push(digit1);

  const digit2 = calcular(cpfClean, 11);
  cpfClean.push(digit2);

  console.log(isValid(verificar, cpfClean));

  function calcular(numbers, loops) {
    let i = loops;
    let loop = numbers;
    let total = [];

    loop.forEach((value) => {
      total.push(value * i);
      i--;
      return total;
    });

    return calcDigt(total);
  }

  function calcDigt(value) {
    const calc = value.reduce((ac, value) => (ac += Number(value)), 0);

    if (11 - (calc % 11) > 9) return (calc = 0);

    return 11 - (calc % 11);
  }

  function isValid(toCheck, toCompare) {
    const cpf = toCompare
      .join("")
      .replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "$1.$2.$3-$4");

    return toCheck === cpf ? `CPF VALIDO ${cpf}` : `CPF INVALIDO`;
  }
}

CpfIsValid("705.484.450-52");
