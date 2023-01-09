// const num = Number(prompt("Digite um numero"));
// const numeroTitulo = document.getElementById("numero-titulo");
// const texto = document.getElementById("texto");
// numeroTitulo.innerHTML = num;
// texto.innerHTML += `
// Raiz quadrada: ${num ** 0.5} <br />
// ${num} é inteiro: ${Number.isInteger(num)} <br />
// É NaN: ${Number.isNaN(num)} <br />
// Arrendondando para baixo: ${Math.floor(num)} <br />
// Arredondando para cima: ${Math.ceil(num)} <br />
// Com duas casas Decimais ${num.toFixed(2)}`;

function meuEscopo() {
  const form = document.querySelector(".form");

  const pessoas = [];
  const result = document.querySelector(".resultado");

  function recebeEvento(e) {
    e.preventDefault();
    const nome = form.querySelector(".nome");
    const sobrenome = form.querySelector(".sobrenome");
    const peso = form.querySelector(".peso");
    const altura = form.querySelector(".altura");

    pessoas.push({
      nome: nome.value,
      sobrenome: sobrenome.value,
      peso: peso.value,
      altura: altura.value,
    });

    console.log(pessoas);

    result.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`;
  }

  form.addEventListener("submit", recebeEvento);
}

meuEscopo();
