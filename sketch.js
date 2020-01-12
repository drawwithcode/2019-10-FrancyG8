/* Hello, list assignment, right? I'll make my best!
This is your private disco, enjoy carefully*/

//--Setting my variables
var disco;
var catbackground;
var myDiscoSong;
var analyzer;


function preload() {
  //--Loading my external material
  disco = loadModel("./assets/discoball.obj", true);
  catbackground = loadImage("./assets/discoDj.gif", true);
  iridescent = loadImage("./assets/iridescent.jpg", true);
  myDiscoSong = loadSound("./assets/discoCats.mp3");
}


function setup() {
  //--Setting my canvas
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);
}


function draw() {
  //-Just in case my gif doesn't load
  background(0);

  //--Calling my background
  backgroundImage();


  //--Analysing my song
  analyzer = new p5.Amplitude();
  analyzer.setInput(myDiscoSong);

  //--My song is under control
  volume = analyzer.getLevel();
  volume = map(volume, 0, 1, 0, height);

  //--Controlling the movement of my disco ball
  rotateY((frameCount * mouseX) / 300);
  scale(1 + (mouseY / 1000));

  var locX = mouseX - width;
  var locY = mouseY - height;

  //--Controlling the light of my disco ball
  noStroke();
  ambientLight(100, 100, 100);
  directionalLight(255, 255, 0, 0, 1, 0.5);
  pointLight(0, 255, 255, locX, locY, 0);
  pointLight(255, 0, 0, locY, locX, 0);
  texture(iridescent);
  model(disco);

  //--Controlling the movement of the hanger
  push();
  translate(0, -windowHeight / 4);
  cylinder(2, windowHeight / 2);
  pop();

}


function backgroundImage() {
  //--defining my background image adapted to my screen
  push();
  translate(0, 0);
  imageMode(CENTER);
  let scale = Math.max(width / catbackground.width, height / catbackground.height);
  image(catbackground, 0, 0, catbackground.width * scale, catbackground.height * scale);
  pop();

}


function mousePressed() {
  //--The song plays and pauses with the pressure of my mouse
  if (myDiscoSong.isPlaying()) {
    myDiscoSong.pause();
  } else {
    myDiscoSong.play();
  }
}


function windowResized() {
  //--Function to resize my project
  resizeCanvas(windowWidth, windowHeight);
}
