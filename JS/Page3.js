let hiddenText = "So \nGet LOST \nIn the \nDarkness!";
let textPercentage = 0.09; 
let textColor = 0; 
let targetColor = 0; 

var trail = [];
var a = 0;
var colorA, colorB;
var mix = 0;
let x;

let font;

function preload(){
  font = loadFont('Font/MonumentExtended-Ultrabold.otf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(width * textPercentage); 
  noCursor();
  textFont(font);
  colorA = color('#00ff3c');
  colorB = color('#00ff3c');
  x = width + 10;
}

function draw() {
  background(0);
  strokeWeight(0);

  let distance = dist(mouseX, mouseY, width / 2, height / 2);
  let threshold = 105;
  
  if (distance < threshold) {
    targetColor = 255; 
  } else {
    targetColor = 0; 
  }

  textColor = lerp(textColor, targetColor, 0.1);

  fill(0, 250, 60, textColor); 
  textAlign(CENTER, CENTER);
  textLeading(width * textPercentage);
  text(hiddenText, width / 2, height / 2.2);
  
  stroke('#00ff3c');
  strokeWeight(20);
  line(mouseX, mouseY, pmouseX, pmouseY);
  
  let easedColorReversed = lerpColor(colorB, colorA, mix);
  strokeWeight(1);

  trail.push([mouseX, mouseY]);
  for (let i = 0; i < trail.length; i++) {
    noFill();
    stroke(easedColorReversed, a);
    ellipse(trail[i][0], trail[i][1], 30, 30);
    if (a > 255) {
      trail.shift();
      a = 0;
    }
    a += 15;
  }
  //Credit to: Chat GPT
}
