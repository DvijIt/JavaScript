const vehicle = {
  name: 'Argo',
  move() {
    console.log(`${name} is moving`)
  },
  stop() {
    console.log(`${name} is stopped`)
  }
}

const ship = {
  startMachine() {
    console.log(`${name} lifting anchor up`);
    this.move();
  },
  startMachine() {
    this.stop();
    console.log(`${name} lifting anchor down`);
  },
  __proto__: vehicle
}

export { vehicle, ship }