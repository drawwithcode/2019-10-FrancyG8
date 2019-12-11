/* Hello, list assignment, right? I'll make my best!
This is your private disco, enjoy carefully*/

//--Setting my variables
var disco;
var catbackground;
var myDiscoSong;


function preload(){
  //--Loading my external material
  disco = loadModel("assets/discoball.obj", true);
  catbackground = createImg("assets/discoball.obj", true);
  myDiscoSong = loadSound("./assets/starWars.mp3");

}


function setup() {
  //--Setting my canvas
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);

  //--Analysing my song
  analyzer = new p5.Amplitude();
  analyzer.setInput(myDiscoSong);

}


function draw() {
  background(0);
  catbackground.position(0, 0);

  rotateY(frameCount);
  scale(2);
  normalMaterial();
  model(disco);
}
