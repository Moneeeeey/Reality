let trail = [];
let a = 0;
let colorA, colorB;
let mix = 0;
let x;
let textDistortion = 0;
let font;
let particles = [];
let welcome = 'Thanks to'; 
function preload(){
  font = loadFont('../Font/MonumentExtended-Regular.otf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER); 
  noCursor();
  
  colorA = color('#ffffff');
  colorB = color('#ffffff');
  
  x = width+10;
  
  // Create particles for the text
  let points = font.textToPoints('Think about it', width/5.5, height/2, 100, {
    sampleFactor: 1
  });
  
  for (let i = 0; i < points.length; i++) {
    let pt = points[i];
    let particle = new Particle(pt.x, pt.y);
    particles.push(particle);
  }
}

function draw() {
  background('#EC3186');
  fill('#ffffff');
  let distToText = dist(mouseX, mouseY, width/2, height/2);
  if (distToText < 100) {
    textDistortion = map(distToText, 0, 100, 0, 50);
  } else {
    textDistortion = 0;
  }
  
  let xDistortion = random(-textDistortion, textDistortion);
  let yDistortion = random(-textDistortion, textDistortion);
  
  push();
  //translate(xDistortion, yDistortion);
  

  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].display();
  }
  
  pop();
  
  stroke('#ffffff');
  strokeWeight(20);
  line(mouseX, mouseY, pmouseX, pmouseY);
  
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

class Particle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D().mult(random(0, 0)); 
    this.acc = createVector();
    this.color = color(255);
  }
  
  update() {
    let d = dist(mouseX, mouseY, this.pos.x, this.pos.y);
    if (d < 70) {
      let force = p5.Vector.sub(this.pos, createVector(mouseX, mouseY));
      force.setMag(1 / d * 20);  
      this.acc.add(force);
    }
    
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0); 
  }
  
  display() {
    stroke(this.color);
    strokeWeight(2);
    point(this.pos.x, this.pos.y);
  }


  //Credit to: Generative Pre-trained Transformer
}
