import validator from "validator";

export default class Login {
  constructor(formClass) {
    this.form = document.querySelector(formClass);
  }

  init() {
    this.events();
  }

  events() {
    if (this.form) {
      this.form.addEventListener("submit", (e) => {
        e.preventDefault();
        this.validate(e);
      });
    }
  }

  validate(e) {
    const el = e.target;
    const emailInput = el.querySelector('input[name="email"]');
    const passwordInput = el.querySelector('input[name="password"]');

    let error = this.verificarSeHouveErros(emailInput, passwordInput);

    if (!error) el.submit();
  }

  verificarSeHouveErros(email, password) {
    let error = false;

    for (let errorText of this.form.querySelectorAll(".text-danger")) {
      errorText.remove();
    }

    if (!validator.isEmail(email.value)) {
      this.criaErro("E-mail inválido", email);
      error = true;
    }

    if (password.value.length < 3 || password.value.length > 50) {
      this.criaErro("Senha precisa ter entre 3 e 50 caracteres", password);
      error = true;
    }

    return error;
  }

  criaErro(erro, input) {
    const div = document.createElement("div");
    div.innerHTML += erro;
    div.classList.add("text-danger");
    input.insertAdjacentElement("afterend", div);
  }
}
