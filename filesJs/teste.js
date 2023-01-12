// 7  0  5  4  8  4   4  5  0
// 10 9  8  7  6  5   4  3  2

// 7  0  5  4  8  4   4   5  0  5
// 11 10 9  8  7  6   5   4  3  2

function CpfIsValid(cpf) {
  const verificar = cpf;
  const cpfClean = Array.from(cpf.replace(/\D+/g, "")).slice(0, -2);

  const digit1 = cpfClean.map((v, i) => v * (i + 1)).reduce((a, v) => (a += v));
  console.log(digit1);

  if (digit1 > 9) {
    cpfClean.push(0);
  } else {
    cpfClean.push(digit1);
  }

  const digit2 = cpfClean.map((v, i) => v * i).reduce((a, v) => (a += v)) % 11;

  if (digit2 > 9) {
    cpfClean.push(0);
  } else {
    cpfClean.push(digit2);
  }

  function isValid(toCheck, toCompare) {
    const cpf = toCompare
      .join("")
      .replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "$1.$2.$3-$4");

    return toCheck === cpf ? `CPF VALIDO ${cpf}` : `CPF INVALIDO`;
  }

  console.log(isValid(verificar, cpfClean));
}

CpfIsValid("705.484.450-52");

console.log(170 % 11);
