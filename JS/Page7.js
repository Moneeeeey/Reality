let font;
let points = [];
let msg = 'LooK';
let size = 90;
let r = 9;
let angle = 0;


var trail = [];
var a = 0;
var colorA, colorB;
var mix = 0;
let x;


function preload() {
  font = loadFont("../Font/MonumentExtended-Regular.otf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER);
  points = font.textToPoints(msg, width/2, height/2, size, {
    sampleFactor: 0.3,
    simplifyThreshold: 0.0,
  });
  
  for (let i = 0; i < points.length; i++) {
    points[i].x -= size*1.75;
  }
  
  noCursor();
  colorA = color('#97FEED');
  colorB = color('#97FEED');
  
  x = width+10;

}

function draw() {
  background('#020C2C');
  
  

stroke('#97FEED');
strokeWeight(1);
 text('Change the',width/2, height/4);
 text('way you',width/2, height/2.6);
 text('at things',width/2, height/1.58);
 let targetAngle = atan2(mouseY - height / 2, mouseX - width / 2);
  angle = lerp(angle, targetAngle, 0.05); 
  
  for (let i = 0; i < points.length; i++) {
    let x = r * cos(angle);
    let y = r * sin(angle);
    line(points[i].x, points[i].y, points[i].x + x, points[i].y + y);
  }
  
  //fill(255, 100);
  textSize(size);
  textFont(font);
  text(msg, width/2, height/2);
  
  stroke('#97FEED');
  strokeWeight(15);
  line(mouseX, mouseY, pmouseX, pmouseY);
  
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
  
  
}
