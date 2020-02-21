class Vehicle {
  move() {
    console.log(`${this.name} is moving`)
  }
  stop() {
    console.log(`${this.name} stopped`)
  }
}

class Ship {
  name: 'Argo',
  startMachine() {
    console.log(`${this.name} lifting anchor up`);
    this.move();
  }
  stopMachine() {
    this.stop();
    console.log(`${this.name} lifting anchor down`);
  }
  __proto__: vehicle
}

export { vehicle, ship }
