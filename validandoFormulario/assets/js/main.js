class FormIsValid {
  constructor() {
    this.form = document.querySelector(".form");
    this.event();
  }

  event() {
    this.form.addEventListener("submit", (e) => {
      this.handleSubmit(e);
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const validFields = this.isValid();
    const passwordsValid = this.passwordsIsValid();

    if (validFields && passwordsValid) {
      alert("Formulario enviado.");
      this.form.submit();
    }
  }

  passwordsIsValid() {
    let valid = true;

    const password = this.form.querySelector(".password");
    const passwordRepeat = this.form.querySelector(".repeatPassword");

    if (password.value !== passwordRepeat.value) {
      valid = false;
      this.createError(
        password,
        "Campos senha e repetir senha precisam ser iguais."
      );

      this.createError(
        passwordRepeat,
        "Campos senha e repetir senha precisam ser iguais."
      );
    }

    if (password.value.length < 6 || password.value.length > 12) {
      valid = false;
      this.createError(
        password,
        "Senha precisa estar entre 6 e 12 caracteres."
      );
    }

    return valid;
  }

  isValid() {
    let valid = true;

    for (let errorText of this.form.querySelectorAll(".error-text")) {
      errorText.remove();
    }

    for (let fields of this.form.querySelectorAll(".isValid")) {
      const label = fields.previousElementSibling.innerText;

      if (!fields.value) {
        this.createError(fields, `Campo "${label}" não pode estar em branco`);
        valid = false;
      }

      if (fields.classList.contains("cpf")) {
        if (!this.validCpf(fields)) valid = false;
      }

      if (fields.classList.contains("user")) {
        if (!this.validUser(fields)) valid = false;
      }
    }
    return valid;
  }

  validUser(fields) {
    const user = fields.value;
    let valid = true;

    if (user.length < 3 || user.length > 12) {
      this.createError(fields, "Usuário precisa ter entre 3 e 12 caracteres.");
      valid = false;
    }

    if (!user.match(/^[a-zA-Z0-9]+$/g)) {
      this.createError(
        fields,
        "Nome de usuário precisa conter apenas letras e/ou números."
      );
      valid = false;
    }

    return valid;
  }

  validCpf(fields) {
    const cpf = new ValidCpf(fields.value);

    if (!cpf.valid()) {
      this.createError(fields, "CPF inválido.");
      return false;
    }

    return true;
  }

  createError(fields, msg) {
    const div = document.createElement("div");
    div.innerHTML = msg;
    div.classList.add("error-text");
    fields.insertAdjacentElement("afterend", div);
  }
}

const form = new FormIsValid();
