class PolygonWave extends Wave {
  constructor() {
    super();
    this.lifespan = 0;

  }

  addWaves(amount) {
    if (this.waves.length < 300) {
      for (let i = 0; i < amount; i++) {
        this.waves.push(new Polygon(0.01));
      }
    }
  }

  removeWaves(amount) {
    for (let i = 0; i < amount; i++) {
      if (this.waves.length > 1) {
        this.waves.shift();
      }
    }
  }

  display() {

    for (let i = 0; i < this.waves.length; i++) {

      if (this.waves.length == 300) {
        this.removeWaves(1);
      }

      this.waves[i].move();
      this.waves[i].display();
    }
  }
}