function Calculator() {
  this.display = document.querySelector(".display");

  this.init = () => {
    this.clickButtons();
    this.keyPressEnter();
  };

  this.keyPressEnter = () => {
    this.display.addEventListener("keyup", (e) => {
      if (e.keyCode === 13) {
        this.equal();
      }
    });
  };

  this.equal = () => {
    try {
      const count = eval(this.display.value);

      if (!count) {
        alert("invalid operation!");
        return;
      }

      this.display.value = String(count);
    } catch (e) {
      alert("Invalid operation!");
      return;
    }
  };

  this.clickButtons = () => {
    document.addEventListener("click", (e) => {
      const el = e.target;
      if (el.classList.contains("btn-num")) this.displayButton(el);
      if (el.classList.contains("btn-clear")) this.clear();
      if (el.classList.contains("btn-del")) this.del();
      if (el.classList.contains("btn-eq")) this.equal();
    });
  };

  this.clear = () => (this.display.value = "");
  this.del = () => (this.display.value = this.display.value.slice(0, -1));

  this.displayButton = (el) => {
    this.display.value += el.innerText;
    this.display.focus();
  };
}

const calculator = new Calculator();
calculator.init();
