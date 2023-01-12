class RemoteControl {
  constructor(tv) {
    this.tv = tv;
    this.volume = 0;
  }

  // Método de instancia
  increaseVolume() {
    this.volume += 2;
  }

  toDecreaseVolume() {
    this.volume -= 2;
  }

  // Método estático -> não tem acesso ao this
  static changeBattery() {
    console.log("Ok");
  }
}

const control1 = new RemoteControl("LG");
control1.increaseVolume();
control1.increaseVolume();
control1.increaseVolume();
RemoteControl.changeBattery();
console.log(control1);
