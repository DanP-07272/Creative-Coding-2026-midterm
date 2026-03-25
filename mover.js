class Mover {
  constructor(i) {
    this.mass = 1;
    this.position = createVector(width / 2, 0);
    this.velocity = createVector(random(-1, 1), 0);
    this.acceleration = createVector(0, 0);

    this.value = 7;

    this.colors = [
      color("red"),
      color("orange"),
      color("yellow"),
      color("green"),
      color("blue"),
      color("purple"),
      color(100)
    ];

    this.col = this.colors[0];
    this.index = i;
  }

  applyForce(force) {
    let f = p5.Vector.div(force, this.mass);
    this.acceleration.add(f);
  }

  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
  }

  show() {
    if (this.value <= 0) return;

    stroke(0);
    strokeWeight(2);
    fill(this.col);

    let size = this.value * 20;
    ellipse(this.position.x, this.position.y, size);

    fill(0);
    textAlign(CENTER, CENTER);
    text(this.value, this.position.x, this.position.y);
  }

  checkEdges() {
    if (this.position.x > width) {
      this.position.x = width;
      this.velocity.x *= -1;
    } else if (this.position.x < 0) {
      this.velocity.x *= -1;
      this.position.x = 0;
    }

    if (this.position.y > height) {
      this.velocity.y *= -1;
      this.position.y = height;

      if (this.value > 0) {
        this.value--;
        let idx = 7 - this.value - 1;
        this.col = this.colors[idx];
      }
    }
  }

  checkCollision() {
    let d = width;

    for (let j = 0; j < movers.length; j++) {
      if (j != this.index) {
        line(
          this.position.x,
          this.position.y,
          movers[j].position.x,
          movers[j].position.y
        );

        d = dist(
          this.position.x,
          this.position.y,
          movers[j].position.x,
          movers[j].position.y
        );
      }
    }
  }
}