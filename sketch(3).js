let video; 
let scale = 16; 

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  
  video = createVideo(['video.mp4']);
  video.size(width / scale, height / scale);
  video.loop();      
         

  pixelDensity(1);
  rectMode(CENTER);
}

function draw() {
  background(0);
  
  video.loadPixels(); 

  translate(scale/2, scale/2);
  
  let index = 0;
  
  for(let y = 0; y < video.height; y++){
    for(let x = 0; x < video.width; x++){
      
      let r = video.pixels[index];
      let g = video.pixels[index + 1];
      let b = video.pixels[index + 2];
      
      let bright = (r + g + b) / 3;
      
      rect(x * scale, y * scale, scale * (bright / 255), scale * (bright / 255));
      
      index += 4;
    }
  }
  
  video.updatePixels();
}