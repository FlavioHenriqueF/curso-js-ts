const elements = document.querySelector(".container");

const elementos = [
  { tag: "p", texto: "Frase 1" },
  { tag: "p", texto: "Frase 2" },
  { tag: "p", texto: "Frase 3" },
  { tag: "p", texto: "Frase 4" },
];

const div = document.createElement("div");

for (let i = 0; i < elementos.length; i++) {
  let { tag, texto } = elementos[i];
  const criarTag = document.createElement(tag);
  criarTag.innerText = texto;
  div.appendChild(criarTag);
}

elements.appendChild(div);
