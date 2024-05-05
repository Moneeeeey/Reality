var trail = [];
var a = 0;
var colorA, colorB;
var mix = 0;
let x;

var Font;

function preload(){
  font = loadFont('../Font/HeptaSlab-ExtraBold.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(font);
  textAlign(CENTER);
  noCursor();
  
  colorA = color('#3433E2');
  colorB = color(205,255,0);
  
  x = width+10;
}

function draw() {
  background('#3433E2');
  
  let textSizeValue = max(width, height) * 0.1;
  textSize(textSizeValue);
  strokeWeight(0);
  fill(205,255,0);
  
  // Distort the text based on cursor's x-coordinate
  let distortion = map(mouseX, 0, width, -0.2, 0.2); // Adjust the distortion range as desired
  let xOffset = width / 2 + (width / 10 * distortion);
  let yOffset = height / 2.5;
  
  // Draw distorted text
  push();
  translate(xOffset, yOffset);
  shearX(distortion);
  text('MAKE A\n  NEW \nONE!', 0, 0);
  pop();
  
  let textLeadingValue = textSizeValue * 0.94;
  textLeading(textLeadingValue);
  
  stroke(205,255,0);
  strokeWeight(20);
  line(mouseX,mouseY,pmouseX,pmouseY);
  
  let easedColorReversed = lerpColor(colorB, colorA, mix);
  
  strokeWeight(1);
  
  trail.push([mouseX, mouseY]);
  for(let i = 0; i < trail.length; i++) {
    noFill();
    stroke(easedColorReversed, a);
    ellipse(trail[i][0], trail[i][1], 30, 30);
    if(a > 255) {
      trail.shift();
      a = 0;
    }
    a += 15;
  }
}
