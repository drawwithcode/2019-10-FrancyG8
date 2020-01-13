/* This is your private disco, enjoy it carefully */

//--Setting my variables
var disco;
var iridescent;
var pesce;
var pescetexture;
var catbackground;
var myDiscoSong;
var analyzer;
let myFont;


function preload() {
  //--Loading my external material
  disco = loadModel("./assets/discoball.obj", true);
  iridescent = loadImage("./assets/iridescent.jpg", true);
  pesce = loadModel("./assets/fish.obj", true);
  pescetexture = loadImage("./assets/fish_texture.png", true);
  catbackground = loadImage("./assets/discoDj.gif", true);
  myDiscoSong = loadSound("./assets/disco-Cats.mp3");
  myFont = loadFont('./assets/RobotoSlab-Regular.ttf');
}


function setup() {
  //--Setting my canvas
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);

  //--Analysing my song
  analyzer = new p5.Amplitude();
  analyzer.setInput(myDiscoSong);

  //--My song is under control
  volume = analyzer.getLevel();
  volume = map(volume, 0, 1, 0, height);
}


function draw() {
  //-Just in case my gif doesn't load
  background(0);

  //--Calling my background
  backgroundImage();

  //--Instructions
  push();
    noStroke();
    fill(255);
    translate(-windowWidth / 2, -windowHeight / 2);
    rect(0, windowHeight - 80, windowWidth, 80);

    var myText = "Click everywhere to play or pause the purrrest song";
    noStroke();
    fill('Black');
    textFont(myFont);
    textSize(20);
    text(myText, 40, windowHeight - 30);
  pop();

  push();
    //--Controlling the movement of my elements
    translate(0, 0, 200);
    rotateY((frameCount * mouseX) / 300);
    scale(0.5 + (mouseY / 1000));

    //--Controlling the light of my disco ball
    var locX = mouseX - width;
    var locY = mouseY - height;
    noStroke();
    directionalLight(0, 0, 255, -100, -100, -60);
    directionalLight(0, 255, 0, 0, 50, -60);
    pointLight(100, 100, 255, 0, -locY, 0);
    pointLight(255, 0, 0, locX, locY, 0);
    // texture(iridescent);
    specularMaterial(255);
    model(disco);

    //--Controlling the movement of the pole
    translate(0, -windowHeight / 2);
    cylinder(2, windowHeight);

    //--Controlling the movement of my first fish
    translate(0, windowHeight/2, 150);
    rotateY(90);
    scale(mouseY / 1000);
    texture(pescetexture);
    model(pesce);

    //--Controlling the movement of my second fish
    translate(-50, 100, 150);
    scale(2);
    texture(pescetexture);
    model(pesce);
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
