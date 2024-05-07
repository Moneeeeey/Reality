let teapot;
let earth;
let rotationX = 0;
let rotationY = 0;

let Earthlayer

let earthPositionX = 0;
let earthPositionY = -80;
let earthPositionZ = 0;


var trail = [];
var a = 0;
var colorA, colorB;
var mix = 0;
let x;

let font;

function preload() {
  Earthlayer = loadImage('IMG/KONI.jpg');
  font = loadFont("Font/HeptaSlab-SemiBold.ttf");
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  textStyle(NORMAL);
  textFont(font);
  textAlign(CENTER);
  noCursor();
  
}

function draw() {
  background("#000000");
  

  // Apply orbit control to rotate the canvas
  //orbitControl();

  rotationX += (mouseY - pmouseY) * 0.01;
  rotationY += (mouseX - pmouseX) * 0.01;

  push(); 
  translate(earthPositionX, earthPositionY, earthPositionZ);
  rotateX(rotationX);
  rotateY(rotationY);
  noStroke(); // Disable stroke for the sphere
  //model(earth);
  sphere(100);
  pop(); // Restore the previous transformation state

  // Display text fixed on the canvas
  push(); // Save the current transformation state
  
   stroke('#fffff');
   //strokeWeight(20);
  translate(-width / 2 + 10, -height / 2 + 30); // Set position for text
  strokeWeight(20);
  if(mouseX == pmouseX && mouseY == pmouseY){
    circle(mouseX,mouseY,1);
  } else {
     line(mouseX,mouseY,pmouseX,pmouseY);
  }
  textSize(100);
  text("The ", width / 2, height / 6);
  textLeading(90);
  text("is \nso \n small! ", width / 2, height / 1.6);
  pop(); 
  
  
  

  texture(Earthlayer); 
  ambientLight(200)
  

}
