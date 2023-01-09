const h1 = document.querySelector(".container h1");
const data = new Date();

getDiaSemana = (data) => {
  let diaSemanaTexto = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sabado",
  ];

  return diaSemanaTexto[data];
};

getMes = (mes) => {
  let mesNome = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julio",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  return mesNome[mes];
};

zeroEsquerda = (num) => {
  return num >= 10 ? num : `0${num}`;
};

function criaDate(data) {
  const diaSemana = data.getDay();
  const numeroMes = data.getMonth();

  const nomeDia = getDiaSemana(diaSemana);
  const nomeMes = getMes(numeroMes);

  return (
    `${nomeDia}, ${data.getDate()} de ${nomeMes} de ${data.getFullYear()}` +
    ` ${zeroEsquerda(data.getHours())}:${zeroEsquerda(data.getMinutes())}`
  );
}

h1.innerHTML = criaDate(data);

// const diaSemana = data.getDay();
// const dia = data.getDate();

// const mes = getMes(data.getMonth() + 1);
// let data = new Date();
// let opcoes = {
//   dateStyle: "full",
//   timeStyle: "short",
// };

// texto.innerHTML = data.toLocaleString("pt-BR", opcoes);
