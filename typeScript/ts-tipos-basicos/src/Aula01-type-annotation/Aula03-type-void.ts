function noReturn(...args: Array<string>): void {
  console.log(args.join(' '));
}

const person = {
  name: 'Flavio',
  lastName: 'Henrique',

  sayName(): void {
    console.log(this.name + ' ' + this.lastName);
  },
};

noReturn('Flavio', 'Henrique');
person.sayName();

export { person };
