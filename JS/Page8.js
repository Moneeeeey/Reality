let message = "and don't forget";
let messageX;
const xSpeed = 3;
let ySpeed;
const amplitude = 270;
const verticalLetterSpacing = 10;
let font;


var trail = [];
var a = 0;
var colorA, colorB;
var mix = 0;
let x;


function preload() {
  font = loadFont('../Font/Jacquard24-Regular.ttf')
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(font);
  textAlign(CENTER);
  messageX = width;
  
  
  colorA = color('#E8B741');
  colorB = color('#E8B741');
  noCursor();
  
  x = width+10;
}

function draw() {
  background('#00A0D4');  
  
  stroke('#E8B741');
 strokeWeight(20);
 line(mouseX,mouseY,pmouseX,pmouseY);

  let easedColorReversed = lerpColor(colorB, colorA, mix);
  
   strokeWeight(1);

  
    trail.push([mouseX, mouseY]);
  for(let i = 0; i < trail.length; i++) {
  noFill();
  stroke(easedColorReversed, a);
  ellipse(trail[i][0], trail[i][1], 30, 30);
    if(a > 255)  {
      trail.shift();
      a = 0;
    }
    a += 15;
  }
  
    fill('#E8B741');

  strokeWeight(0);
  textSize(100);

  for (let i = 0; i < message.length; i++) {
    const letterX = messageX + textWidth(message.substring(0, i));

    const letterOffset = i * verticalLetterSpacing;
    const letterY = height / 2 +
      sin((frameCount - letterOffset) * ySpeed) * amplitude;
    
    text(message[i], letterX, letterY);
  }

  messageX -= xSpeed;
  if (messageX < - textWidth(message)) {
    messageX = width + 50;
  }
  
  textSize(14);
  fill(200);
  text('Credit to somepx', width/2, height/1.02); 
}

function mouseMoved(){
  let mouseYFraction = mouseX / height; 
  ySpeed = map(mouseYFraction, 0, 2, 0.01, 0.1); 
  
  
  
  //Credit to: creator somepx
}
