var trail = [];
var a = 0;
var colorA, colorB;
var mix = 0;
let x;

let passTextX;
let xStart = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER);
  noCursor();
  
  colorA = color('#DA1212');
  colorB = color('#DA1212');
  
  x = width;
  
  //passTextX = width*5;
  
}

function draw() {
  background('#eeeeee');
  
  
   strokeWeight(0);
  
  let h = hour();
  let m = minute();
  let s = second();
  
  //passTextX = passTextX + 3;
  
    //if (passTextX > width + width/5) {
    //passTextX = -width/5;
  //}
  
  textSize(70);
  fill("#DA1212");
  text("Do it or Don't,",width/2,height/3);
  text(+ nf(h, 2) + ":" + nf(m, 2) + ":" + nf(s, 2), width/2, height/2.3);
  text("Will",width/2,height/1.85);
  text("ANYWAYS!",width/2,height/1.35);
  
  
  stroke("#DA1212");
 strokeWeight(20);
 line(mouseX,mouseY,pmouseX,pmouseY);

  
  let easedColorReversed = lerpColor(colorB, colorA, mix);
  
   strokeWeight(1);
  
    trail.push([mouseX, mouseY]);
   for(let i = 0; i < trail.length; i++) {
   fill('#3433E2');
   noFill();
   stroke(easedColorReversed, a);
   ellipse(trail[i][0], trail[i][1], 30, 30);
     if(a > 255) /* This value for the number of the number of cirlce */ {
      trail.shift();
      a = 0;
    }
    a += 15;
  }
  
  

   for (let x = xStart; x < width + 100; x += 170) {
    fill('#DA1212'); 
    textStyle(ITALIC); 
    text('pass', x, height/1.6);
    textStyle(NORMAL); 
  }

  xStart--;


  
}