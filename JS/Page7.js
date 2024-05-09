let font;
let points = [];
let msg = 'LooK';
let size = 120;
let r = 9;
let angle = 0;
var Welcome = 'Credit to Patt Vira';

var trail = [];
var a = 0;
var colorA, colorB;
var mix = 0;
let x;


function preload() {
  font = loadFont("Font/MonumentExtended-Regular.otf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER);
  points = font.textToPoints(msg, width/2, height/1.65, size, {
    sampleFactor: 0.3,
    simplifyThreshold: 0.0,
  });
  
  for (let i = 0; i < points.length; i++) {
    points[i].x -= size*1.75;
  }
  
  noCursor();
  colorA = color('#ffffff');
  colorB = color('#ffffff');
  
  x = width+10;


}

function draw() {
  background('#0033A0');

  

stroke('#ffffff');
strokeWeight(2);
 text('Change ',width/1.9, height/5.5);
 text('the way',width/2, height/3);
 text('you',width/2, height/2.2);
 text('at things!',width/2, height/1.3);
 let targetAngle = atan2(mouseY - height / 2, mouseX - width / 2);
  angle = lerp(angle, targetAngle, 0.05); 
  strokeWeight(1);
  for (let i = 0; i < points.length; i++) {
    let x = r * cos(angle);
    let y = r * sin(angle);
    line(points[i].x, points[i].y, points[i].x + x, points[i].y + y);
  }
  

  textSize(size);
  textFont(font);
  text(msg, width/2, height/1.65);
  
  stroke('#ffffff');
  strokeWeight(15);
  line(mouseX, mouseY, pmouseX, pmouseY);
  
  let easedColorReversed = lerpColor(colorB, colorA, mix);
  
   strokeWeight(1);
  

  
    trail.push([mouseX, mouseY]);
  for(let i = 0; i < trail.length; i++) {
  noFill();
  stroke(easedColorReversed, a);
  ellipse(trail[i][0], trail[i][1], 30, 30);
    if(a > 255) /* This value for the number of the number of cirlce */ {
      trail.shift();
      a = 0;
    }
    a += 15;
  }
  
  

textSize(10);
strokeWeight(0.5);
  let kos = height - 15;
  text(Welcome,width/2,kos);
stroke(1);
 textSize(size);

 //Credit to: creator Patt Vira

}
