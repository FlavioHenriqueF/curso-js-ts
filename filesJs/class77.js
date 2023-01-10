function Person(name, lastName) {
  // Atributos ou métodos privados
  const id = 123456;
  const method = () => {};

  // Atributos ou métodos públicos
  this.name = name;
  this.lastName = lastName;

  this.method = () => {
    console.log(this.name + ": I'm Method");
  };
}

const p1 = new Person("Luiz", "Otavio");
const p2 = new Person("Flavio", "Henrique");

console.log(p2.name);
p1.method();
