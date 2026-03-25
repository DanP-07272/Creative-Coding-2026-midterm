let squares = [];

let imgs = [];
let links = [
  "Daniel_sketch1.html",
  "Daniel_sketch2.html",
  "Daniel_sketch3.html"
];

function preload() {
  imgs[0] = loadImage("sketch1.png");
  imgs[1] = loadImage("sketch2.png");
  imgs[2] = loadImage("sketch3.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < 3; i++) {
    squares.push({
      x: random(200, width - 200),
      y: random(200, height - 200),
      size: 200,
      xVel: random(-15, 15),
      yVel: random(-15, 15),
      img: imgs[i],
      link: links[i]
    });
  }
}

function draw() {
  background(220);

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
    textSize(32);
  fill(255);
  stroke(0);
  strokeWeight(4);
  text('DANIEL PARK', width/2, 50);
    image(s.img, s.x, s.y, s.size, s.size);
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
