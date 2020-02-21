const vehicle = {
  move() {
    console.log(`${this.name} is moving`)
  },
  stop() {
    console.log(`${this.name} is stopped`)
  }
}

const ship = {
  name: 'Argo',
  startMachine() {
    console.log(`${this.name} lifting anchor up`);
    ship.move();
  },
  stopMachine() {
    ship.stop(),
    console.log(`${this.name} lifting anchor down`);
  },
  __proto__: vehicle
}

export { vehicle, ship }