let migae;
let fontSize = 200;
let wobblyTexts = [];

function preload() {
  migae = loadFont('../Font/Helvetica-Bold.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(migae);
  textAlign(CENTER);

  // Automatically add "a" and "b" to the wobblyTexts array
  addWobblyText("O", width / 5.5 -  fontSize * 0.5, height / 2);
  addWobblyText("K", width / 4 , height / 2);
  addWobblyText("?", width / 3.5 + fontSize * 0.5, height / 2);
}

function draw() {
  background('#810034');
  textSize(fontSize);
  textSize(30);
  fill('#FFF600');
  text('Everything will be ok', 200,200)
  
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


