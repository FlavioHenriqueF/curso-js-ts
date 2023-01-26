import isEmail from 'validator/lib/isEmail';
export default class ValidarForm {
  form: HTMLFormElement;
  nameInput: HTMLInputElement;
  emailInput: HTMLInputElement;
  password: HTMLInputElement;
  passwordEqual: HTMLInputElement;
  constructor(form: string) {
    this.form = document.querySelector(form) as HTMLFormElement;
    this.nameInput = this.form.querySelector(
      'input[name="username"]',
    ) as HTMLInputElement;

    this.emailInput = this.form.querySelector(
      'input[name="email"]',
    ) as HTMLInputElement;

    this.password = this.form.querySelector(
      'input[name="password"]',
    ) as HTMLInputElement;

    this.passwordEqual = this.form.querySelector(
      'input[name="password2"]',
    ) as HTMLInputElement;
  }

  init() {
    this.form.addEventListener('submit', (e) => {
      this.handleSubmit(e);
    });
  }

  handleSubmit(e: Event): void {
    e.preventDefault();
    this.validate();
  }

  // valida e envia o formulario!
  validate() {
    const name = this.nameInput;
    const email = this.emailInput;
    const password = this.password;
    const passwordEqual = this.passwordEqual;

    const passwordIsValid = this.checkPassword(password, passwordEqual);
    const emailIsValid = this.checkEmail(email);
    this.checkEmptyFields(email, password, passwordEqual);
    if (!name.value.trim()) {
      return this.createError(name, 'Campo não pode ficar vazio');
    }

    if (passwordIsValid && emailIsValid) this.form.submit();
  }

  // Checa os campos
  checkEmptyFields(...inputs: HTMLInputElement[]): void {
    inputs.forEach((input) => {
      if (!input.value) this.createError(input, 'Campo não pode ficar vazio');
    });
  }

  // checa o email se é valido
  checkEmail(input: HTMLInputElement): boolean {
    let isValid = true;
    if (!isEmail(input.value)) {
      isValid = false;
      this.createError(input, 'Email invalido');
    }

    return isValid;
  }

  // checa se a senha é valida
  checkPassword(
    password: HTMLInputElement,
    passwordEqual: HTMLInputElement,
  ): boolean {
    let isValid = true;

    if (password.value.length < 6 || password.value.length > 12) {
      isValid = false;
      this.createError(
        password,
        'Senha precisa estar entre 6 e 12 caracteres.',
      );
    }

    if (password.value !== passwordEqual.value) {
      this.createError(
        passwordEqual,
        'As senhas não coincidem uma com a outra.',
      );
      this.createError(password, 'As senhas não coincidem uma com a outra.');
      isValid = false;
    }

    return isValid;
  }

  // gera o erro
  createError(input: HTMLInputElement, msg: string): void {
    const formFields = input.parentElement as HTMLDivElement;
    const errorMessage = formFields.querySelector(
      '.error-message',
    ) as HTMLSpanElement;
    errorMessage.innerText = msg;
    formFields.classList.add('show-error-message');
  }
}
