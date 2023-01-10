(function (age, weight, height) {
  const lastName = "henrique";
  function createName(name) {
    return name + " " + lastName;
  }

  function sayName() {
    console.log(createName("Flavio"));
  }

  sayName();
  console.log(age, weight, height);
})(18, 70, 1.7);
