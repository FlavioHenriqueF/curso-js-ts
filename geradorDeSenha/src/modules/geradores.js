const random = (min, max) => Math.floor(Math.random() * (max - min) + min);
const gerarMaiusculas = () => String.fromCharCode(random(65, 91));
const gerarMinusculas = () => String.fromCharCode(random(97, 123));
const gerarNumeros = () => String.fromCharCode(random(48, 58));
const simbolos = ",.;~^[]{}!@#$%*()_+=-";
const gerarSimbolos = () => simbolos[random(0, simbolos.length)];

export default function gerarSenha(
  qtd,
  maiusculas,
  minusculas,
  numeros,
  simbolos
) {
  const arrayDeSenhas = [];
  qtd = Number(qtd);

  if (qtd < 4) return "Caracteres entre 4 e 20";
  if (qtd > 20) return "Caracteres entre 4 e 20";

  if (qtd >= 4 && qtd <= 20) {
    for (let i = 0; i < qtd; i++) {
      if (maiusculas) arrayDeSenhas.push(gerarMaiusculas());
      if (minusculas) arrayDeSenhas.push(gerarMinusculas());
      if (numeros) arrayDeSenhas.push(gerarNumeros());
      if (simbolos) arrayDeSenhas.push(gerarSimbolos());
    }
  }

  return arrayDeSenhas.join("").slice(0, qtd);
}
