function Calculator() {
  this.display = document.querySelector(".display");

  this.init = () => {
    this.clickButtons();
    this.keyPressEnter();
    this.keyPressClear();
  };

  this.keyPressEnter = () => {
    this.display.addEventListener("keyup", (e) => {
      if (e.keyCode === 13) {
        this.equal();
      }
    });
  };

  this.keyPressClear = () => {
    this.display.addEventListener("keyup", (e) => {
      if (e.keyCode === 67) {
        this.clearDisplay();
      }
    });
  };

  this.clearDisplay = () => (this.display.value = "");
  this.deleteOne = () => (this.display.value = this.display.value.slice(0, -1));

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
      if (el.classList.contains("btn-clear")) this.clearDisplay();
      if (el.classList.contains("btn-del")) this.deleteOne();
      if (el.classList.contains("btn-eq")) this.equal();
    });
  };

  this.displayButton = (value) => {
    this.display.value += value.innerText;
    this.display.focus();
  };
}

const calculator = new Calculator();
calculator.init();
