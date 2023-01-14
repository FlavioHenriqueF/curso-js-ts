import GeraCPF from "./modules/GeraCPF";
import "./assets/css/style.css";

(function () {
  const gera = new GeraCPF();
  const cpfGerado = document.querySelector(".cpf-generator");
  cpfGerado.innerHTML = gera.geraNovoCpf();
})();
