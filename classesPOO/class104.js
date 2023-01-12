class EletronicDevice {
  constructor(name) {
    this.name = name;
    this.connected = false;
  }

  toConnect() {
    if (this.connected) {
      console.log(this.name + " Already connected");
      return;
    }
    this.connected = true;
  }

  toSwitchOff() {
    if (!this.connected) {
      console.log(this.name + " Already to switch off");
      return;
    }
    this.connected = false;
  }
}

const el = new EletronicDevice("Computador");

class Smartphone extends EletronicDevice {
  constructor(name, color, model) {
    super(name);
    this.color = color;
    this.model = model;
  }
}

class Tablet extends EletronicDevice {
  constructor(name, existsWifi) {
    super(name);
    this.existsWifi = existsWifi;
  }

  toConnect() {
    console.log("To connect alterable");
  }
}

const s1 = new Smartphone("Samsung", "Black", "Galaxy S10");

const t1 = new Tablet("Ipad", true);
t1.toConnect();
t1.toConnect();
