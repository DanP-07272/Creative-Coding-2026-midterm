let squares = [];

let links = [
  "Daniel_sketch1.html",
  "Daniel_sketch2.html",
  "Daniel_sketch3.html"
];

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < 3; i++) {
    squares.push({
      x: random(200, width - 200),
      y: random(200, height - 200),
      size: 200,
      xVel: random(-15, 15),
      yVel: random(-15, 15),
      col: color(random(255), random(255), random(255)),
      link: links[i]
    });
  }
}

function draw() {
  background(128, 0, 128); 

  for (let i = 0; i < squares.length; i++) {
    let s = squares[i];

    s.x += s.xVel;
    s.y += s.yVel;

    if (s.x < 0 || s.x > width - s.size) {
      s.xVel *= -1;
    }
    if (s.y < 0 || s.y > height - s.size) {
      s.yVel *= -1;
    }

    for (let j = i + 1; j < squares.length; j++) {
      let other = squares[j];

      if (
        s.x < other.x + other.size &&
        s.x + s.size > other.x &&
        s.y < other.y + other.size &&
        s.y + s.size > other.y
      ) {
        s.xVel *= -1;
        s.yVel *= -1;
        other.xVel *= -1;
        other.yVel *= -1;
      }
    }

    fill(s.col);
    rect(s.x, s.y, s.size, s.size);
  }
}

function mousePressed() {
  for (let s of squares) {
    if (
      mouseX > s.x &&
      mouseX < s.x + s.size &&
      mouseY > s.y &&
      mouseY < s.y + s.size
    ) {
      window.location.href = s.link;
    }
  }
}
