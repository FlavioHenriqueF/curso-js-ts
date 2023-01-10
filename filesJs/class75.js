// Factory Function ( Função Fábrica)
// Constructor function
function createPerson(name, lastName, height, weight) {
  return {
    name,
    lastName,
    height,
    weight,

    //Getter
    get fullName() {
      return `${this.name} ${this.lastName}`;
    },

    // Setter

    set fullName(valor) {
      valor = valor.split(" ");
      this.name = valor.shift();
      this.lastName = valor.join(" ");
    },

    say(talking) {
      return `${this.name} It's ${talking}.`;
    },

    // Getter
    get imc() {
      const indice = this.weight / this.height ** 2;
      return indice.toFixed(2);
    },
  };
}

const p1 = createPerson("Luiz", "Otávio", 1.8, 80);
const p2 = createPerson("Flavio", "Otávio", 1.5, 70);
const p3 = createPerson("Junior", "Otávio", 1.3, 110);

console.log(p1.fullName);
console.log(p2.fullName);
console.log(p3.fullName);
console.log(p3.imc);
