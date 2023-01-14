// async function sla() {
//   const pessoas = await fetch("pessoas.json");
//   const response = await pessoas.json();
//   carregaElementosNaPagina(response);
// }
// sla();

axios("pessoas.json").then((response) =>
  carregaElementosNaPagina(response.data)
);

function carregaElementosNaPagina(json) {
  const table = document.createElement("table");

  for (let pessoa of json) {
    const tr = document.createElement("tr");

    let td = document.createElement("td");
    td.innerHTML = pessoa.nome;
    tr.appendChild(td);

    td = document.createElement("td");
    td.innerHTML = pessoa.idade;
    tr.appendChild(td);

    table.appendChild(tr);
  }

  const container = document.querySelector(".resultado");
  container.appendChild(table);
}
