//--Hello, list assignment, right? I'll make my best!

var disco;
var catbackground;

function preload(){
  disco = loadModel("assets/discoball.obj", true);
  catbackground = loadModel("assets/discoball.obj", true);
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);
}

function draw() {
  background(0);

  rotateY(frameCount);
  scale(2);
  normalMaterial();
  model(disco);
}
