let x = 50, y = 50;

let yVel = 8;
let xVel = 5;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  
  rect(120, mouseY, 30, 100)
  
  ellipse(x, y, 100);
  
  if(y > height -50){ 
    yVel = -yVel;
  }
  if(y < 50){
    yVel = -yVel;
  }
  if(x > windowWidth -50){
    xVel = -xVel;
  }
  if(x < 50){
    
    xVel = -xVel;
  }
  if (x <= 200 && xVel < 0) {
    if (y >= mouseY && y <= mouseY + 100) {
      xVel = -xVel;
    }
  }
  
  
  
  x += xVel 
  y += yVel 
}