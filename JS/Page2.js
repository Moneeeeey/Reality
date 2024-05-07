let trail = [];
let a = 0;
let colorA, colorB, colorC, colorD;
let mix = 0;

let yStart = 0;
let content = "Reality is created by the mind anyways, Reality is created by the mind anyways, Reality is created by the mind anyways, ,";
let FontUsed;

function preload() {
  FontUsed = loadFont("Font/MonumentExtended-Regular.otf");
}

function setup() {
  createCanvas(windowWidth-100, windowHeight-100);
  noCursor();
  frameRate(70);
  textAlign(CENTER, CENTER);
  textSize(20);
  textFont(FontUsed);

  colorA = color(255, 230, 0);
  colorB = color(0, 150, 255);
  colorC = color(255, 0, 0);
  colorD = color(50, 205, 50);
}

function draw() {
  let transition = map(mouseX, 0, width, 0, 1); 
  let currentBackgroundColor = lerpColor(colorA, colorB, transition); 
  let currentTextColor = lerpColor(colorC, colorA, transition); 
  let currentLineColor = lerpColor(colorD, colorA, transition); 

  background(currentBackgroundColor);
  strokeWeight(0);

  for (let y = yStart; y < height; y += 28) {
    fill(
      red(currentTextColor),
      green(currentTextColor),
      blue(currentTextColor),
      y / 4 + 105
    ); 
    text(content, width / 2, y);
  }

  yStart--;

  stroke(currentLineColor);
  strokeWeight(20);
  line(mouseX, mouseY, pmouseX, pmouseY);

  let easedColorReversed = lerpColor(colorD, colorA, currentLineColor);

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
}
