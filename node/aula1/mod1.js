class Pessoa {
  constructor(name) {
    this.name = name;
  }
}

// module.exports.name = "Flavio";
// exports.Pessoa = Pessoa;

const name = "flavio";
const lastName = "Henrique";

exports.name = name;
module.exports.lastName = lastName;

// module.exports = {
//   name,
//   lastName,
//   Pessoa,
// };
