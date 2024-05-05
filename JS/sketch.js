var trail = [];
var a = 0;
var colorA, colorB;
var mix = 0;
let x;



var Font;
var arrow;
var Welcome = 'Welcome to the Interactieve text by Moneeey';
var newFont;

let arrowSize = 40;




function preload(){
  
  font = loadFont('../Font/HeptaSlab-ExtraBold.ttf');
  font2 = loadFont('../Font/HeptaSlab-SemiBold.ttf');
  arrow = loadImage('../IMG/Arrow.png');

  
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(font);
  textAlign(CENTER);
  noCursor();
  
  colorA = color('#3433E2');
  colorB = color('#3433E2');
  
  x = width+10;
}

function draw() {
  background(205,255,0);
  
  
  let textSizeValue = max(width, height) * 0.1;
  textSize(textSizeValue);
  strokeWeight(0);
  textFont(font);
  fill(52,51,226);
  
  
  //strokeWeight(map(mouseX,0,height,1,width/20));
  //stroke(map(255,-(height/4)* text.length,255,255,255),255,255);
  
  text('SICK OF \nYOUR \nREALITY?',width/2,height/2.5);
  
  let textLeadingValue = textSizeValue * 0.9;
  textLeading(textLeadingValue);

  
  let x = width - arrow.width;
  let y = height - arrow.height;
  let kos = height - 40;

  //image(arrow,x,y,40,30);
  

    
  
  strokeWeight(0);
  
   textFont(font2);
   textSize(15);
   text(Welcome,width/2,kos);
  
 stroke(52,51,226);
 strokeWeight(20);
 line(mouseX,mouseY,pmouseX,pmouseY);
  
  
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


  let isMouseOverArrow = mouseX > x && mouseX < x + arrow.width && mouseY > y && mouseY < y + arrow.height;

  if (isMouseOverArrow) {
    arrowSize = 45; 
  } else {
    arrowSize = 40; 
  }

  //image(arrow, x, y, arrowSize, arrowSize - 10 );
  
  //Credit to: Chat GPT for the screen sizing related things
  
  
}