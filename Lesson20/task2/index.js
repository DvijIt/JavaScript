class Vehicle {
  constructor(name, numberOfWheels) {
    this.numberOfWheels = numberOfWheels;
    this.name = name;
  }
  move() {
    console.log(`${this.name} is moving`);
  }
  stop() {
    console.log(`${this.name} stopped`);
  }
}

class Ship extends Vehicle {
  name = 'Argo';
  constructor(name, numberOfWheels, maxSpeed) {
    super(name, false);
    this.maxSpeed = maxSpeed;
  }
  move() {
    console.log(`${this.name} lifting anchor up`);
    super.move();
  }
  stop() {
    super.stop();
    console.log(`${this.name} lifting anchor down`);
  }
}

export { Vehicle, Ship };