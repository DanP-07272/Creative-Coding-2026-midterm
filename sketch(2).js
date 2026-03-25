let movers = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  createP("Press 'c' to start.");
  movers = [];
    for (let i = 0; i <1; i++) {
      movers.push(new Mover(i));
    }
}

function draw() {
  background(255);
  
  if(frameCount%100==0){
    
          movers.push(new Mover());

  }

  let gravity = createVector(0, 0.1);

  for (let i = movers.length - 1; i >= 0; i--) {
    movers[i].applyForce(gravity);
    movers[i].update();
    movers[i].show();
    movers[i].checkEdges();
    movers[i].checkCollision();

    // if (movers[i].value <= 0) {
    //   movers.splice(i, 1);
    //   movers.push(new Mover(movers.length));
    // }
  }
}

function keyPressed() {
  if (key === 'c') {
    // movers = [];
    // for (let i = 0; i <1; i++) {
    //   movers.push(new Mover(i));
    // }
  }
}