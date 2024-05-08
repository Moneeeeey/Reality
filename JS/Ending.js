var trail = [];
var a = 0;
var colorA, colorB;
var mix = 0;
let x;




let migae;
let fontSize = 200;
let wobblyTexts = [];
let font 
function preload() {
  font = loadFont('Font/HeptaSlab-SemiBold.ttf');
  migae = loadFont('Font/Helvetica-BoldOblique.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(migae);
  textAlign(CENTER);
  strokeWeight(0);
  addWobblyText("O", width / 2.4 -  fontSize * 0.5, height / 1.4);
  addWobblyText("K", width / 2.2 , height / 1.4);
  addWobblyText("?", width / 2.1 + fontSize * 0.5, height / 1.4);
  noCursor();
  colorA = color("#FFF600");
  colorB = color("#FFF600");
}

function draw() {



  let kos = height - 55; 
  background('#C40C0C');

  stroke("#FFF600");
  strokeWeight(20);
  line(mouseX,mouseY,pmouseX,pmouseY);

  strokeWeight(0);

  let easedColorReversed = lerpColor(colorB, colorA, mix);
  
   strokeWeight(1);
  

  
    trail.push([mouseX, mouseY]);
  for(let i = 0; i < trail.length; i++) {
  //fill('#3433E2');
  noFill();
  stroke(easedColorReversed, a);
  ellipse(trail[i][0], trail[i][1], 30, 30);
    if(a > 255) /* This value for the number of the number of cirlce */ {
      trail.shift();
      a = 0;
    }
    a += 15;
  }

  strokeWeight(0);
  textSize(fontSize);
  textSize(100);
  textFont(font);
  fill('#FFF600');
  textLeading(105);
  textSize(15);
  text("Don't Give up :)",width/2,kos);
  textSize(100);
  text('Will', width/2,height/2.9)
  text('Everything\n\nBe Okay,', width/2,height/4.3)
  

  for (let i = 0; i < wobblyTexts.length; i++) {
    wobblyTexts[i].draw();
  }

}

function addWobblyText(letter, x, y) {
  let newWobblyText = new WobblyText(letter, x, y, fontSize, 0.3);
  newWobblyText.generateTextPoints();
  wobblyTexts.push(newWobblyText);
}

class WobblyText {
  constructor(text, x, y, size, sampleFactor) {
    this.text = text;
    this.x = x;
    this.y = y;
    this.size = size;
    this.sampleFactor = sampleFactor;
    this.points = [];
  }

  generateTextPoints() {
    this.points = migae.textToPoints(this.text, this.x, this.y, this.size, {
      sampleFactor: this.sampleFactor,
    });
  }

  draw() {
    fill("#FFF600");
   // beginShape();
    for (let i = 0; i < this.points.length; i++) {
      let angle = map(i, 0, this.points.length, 0, 360);
      let distance = dist(mouseX, mouseY, this.points[i].x, this.points[i].y);
      let x = cos(angle / 6) * 0.02 ;
      let y = 0;

      let t = millis() * 0.002;
      let w = this.wobbly(x, y, t);
      let r = 0.5 * (1 + w * 0.25)*(500-distance);
      

      let noiseX = map(noise(t + i * 0.1), 0, 1, -0.05, 0.05);
      let noiseY = map(noise(t + i * 0.1 + 10), 0, 1, -0.01, 0.01);

      let px = (x + noiseX) * r;
      let py = (y + noiseY) * r;

      //curveVertex(this.points[i].x + px, this.points[i].y + py);
      circle(this.points[i].x + px, this.points[i].y + py, 3);
    }
    //endShape(CLOSE);
  }

  wobbly(x, y, t) {
    let w0 = sin(0.3 * x + 1.4 * t + 2.0 + 2.5 * sin(0.4 * y + -1.3 * t + 1.0));
    let w1 = sin(0.2 * y + 1.5 * t + 2.8 + 2.3 * sin(0.5 * x + -1.2 * t + 0.5));
    return (w0 + w1 + 2) * 0.25;
  }
}


