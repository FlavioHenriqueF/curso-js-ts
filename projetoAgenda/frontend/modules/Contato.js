import validator from "validator";

export default class Contato {
  constructor(formClass) {
    this.form = document.querySelector(formClass);
    this.errors = [];
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
    const nameInput = el.querySelector('input[name="nome"]');
    const emailInput = el.querySelector('input[name="email"]');
    const telefoneInput = el.querySelector('input[name="telefone"]');

    const error = this.verificarSeHouveErros(
      nameInput,
      emailInput,
      telefoneInput
    );

    if (!error) el.submit();
  }

  verificarSeHouveErros(name, email, telefone) {
    let error = false;

    for (let errorText of this.form.querySelectorAll(".text-danger")) {
      errorText.remove();
    }
    if (!name.value.trim()) {
      this.criaErro("Nome precisa ser preenchido", name);
      error = true;
    }

    if (email.value && !validator.isEmail(email.value)) {
      this.criaErro("E-mail inválido", email);
      error = true;
    }

    if (!telefone.value && !email.value) {
      this.criaErro(
        "Pelo menos um contato precisa ser enviado: e-mail ou telefone.",
        telefone
      );
      telefone.classList.add("isValid");
      email.classList.add("isValid");
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
