function createCalculator() {
  return {
    display: document.querySelector(".display"),

    start() {
      this.clickButtons();
      this.keyPressEnter();
      this.keyPressBackspace();
    },

    keyPressEnter() {
      this.display.addEventListener("keyup", (e) => {
        if (e.keyCode === 13) {
          this.equal();
        }
      });
    },

    keyPressBackspace() {
      this.display.addEventListener("keypress", (e) => {
        if (e.keyCode === 8) {
          this.deleteOne();
        }
      });
    },

    clearDisplay() {
      this.display.value = "";
    },

    deleteOne() {
      this.display.value = this.display.value.slice(0, -1);
    },

    equal() {
      let count = this.display.value;

      try {
        count = eval(count);

        if (!count) {
          alert("Invalid operation");
          return;
        }

        this.display.value = String(count);
      } catch (e) {
        alert("Invalid operation");
        return;
      }
    },

    clickButtons() {
      // Quando usarmos arrow functions ela não permite a perda do this.
      document.addEventListener("click", (e) => {
        const el = e.target;

        if (el.classList.contains("btn-num")) {
          this.displayButton(el.innerText);
        }

        if (el.classList.contains("btn-clear")) {
          this.clearDisplay();
        }

        if (el.classList.contains("btn-del")) {
          this.deleteOne();
        }

        if (el.classList.contains("btn-eq")) {
          this.equal();
        }

        this.display.focus();
      });
    },

    displayButton(value) {
      this.display.value += value;
    },
  };
}

const calculator = createCalculator();
calculator.start();
