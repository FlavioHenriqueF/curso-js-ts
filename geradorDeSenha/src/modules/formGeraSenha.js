import gerarSenha from "./geradores";

const senhaGerada = document.querySelector(".senha-gerada");
const qtdCaracteres = document.querySelector(".qtd-caracteres");
const maiusculas = document.querySelector(".chk-maiusculas");
const minusculas = document.querySelector(".chk-maiusculas");
const numeros = document.querySelector(".chk-numeros");
const simbolos = document.querySelector(".chk-simbolos");
const gerar = document.querySelector(".gerar-senha");

export default () => {
  gerar.addEventListener("click", () => {
    senhaGerada.innerHTML = geraSenha();
  });
};

function geraSenha() {
  const senha = gerarSenha(
    qtdCaracteres.value,
    maiusculas.checked,
    minusculas.checked,
    numeros.checked,
    simbolos.checked
  );

  console.log(senha);

  return senha || "Selecione uma opção";
}
