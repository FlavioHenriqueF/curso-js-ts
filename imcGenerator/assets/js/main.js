function calculoIMC() {
  const form = document.querySelector("#formulario");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputPeso = e.target.querySelector("#peso");
    const inputAltura = e.target.querySelector("#altura");

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso && !altura) {
      setResult("Valores invalidos", false);
      return;
    }

    if (!peso) {
      setResult("Peso invalido!", false);
      return;
    }

    if (!altura) {
      setResult("Altura invalida!", false);
      return;
    }

    const imc = gerarImc(peso, altura);
    const pegarNivel = getNivelImc(imc);

    const msg = `Seu imc é ${imc} (${pegarNivel}) `;

    setResult(msg, true);
  });

  function getNivelImc(imc) {
    const nivel = [
      "Abaixo do peso",
      "Peso Normal",
      "Sobrepeso",
      "Obesidade grau 1",
      "Obesidade grau 2",
      "Obesidade grau 3",
    ];

    if (imc < 18.5) return nivel[0];
    if (imc <= 24.9) return nivel[1];
    if (imc >= 25 && imc <= 29.9) return nivel[2];
    if (imc >= 30 && imc <= 34.9) return nivel[3];
    if (imc >= 35 && imc <= 39.9) return nivel[4];
    if (imc > 40) return nivel[5];
  }

  function gerarImc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
  }

  function criarP() {
    const p = document.createElement("p");
    return p;
  }

  function setResult(msg, isValid) {
    const result = document.querySelector("#resultado");
    result.innerHTML = "";

    const p = criarP();

    if (isValid) {
      p.classList.add("paragrafo-resultado");
    } else {
      p.classList.add("bad");
    }

    p.innerHTML = msg;
    result.appendChild(p);
  }
}

calculoIMC();
