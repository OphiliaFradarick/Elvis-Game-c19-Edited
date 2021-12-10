var redCarImg, raceCar;
var raceTrackImg, raceTrack;
var oneCashImg, oneCash, fiveCashImg, fiveCash, tenCashImg, tenCash, twentyCashImg, twentyCash, hundredCashImg, hundredCash, cashGroup;

var PLAY=1;
var END=0;
var gameState=PLAY;

function preload(){
  redCarImg = loadImage("redCar.png");
  raceTrackImg = loadImage("racetrack.png");
  cashImg = loadImage("1 dollar.png");
}

function setup(){

  createCanvas(windowWidth,windowHeight);

  raceTrack=createSprite(width/2,200);
  raceTrack.addImage(raceTrackImg);
  raceTrack.velocityY = 4;

  cashGroup = new Group();

  edges = createEdgeSprites();

  redCar = createSprite(40, height - 100)
  redCar.addImage(redCarImg);
}


function draw(){
  background(raceTrackImg);

  
    
    redCar.collide(edges);

    if(keyDown (LEFT_ARROW)){
      redCar.x = redCar.x -4
    }

    if(keyDown (RIGHT_ARROW)){
      redCar.x = redCar.x +4
    }

    spawnCashs()
 
  drawSprites();

}

function spawnCashs(){
  
  if(frameCount % 240 === 0) {
    cash = createSprite(200, -50);
    cash.addImage(cashImg);
    cash.x = Math.round(random(120,400));
    cash.velocityY = 10;
    cash.lifetime = 800;
    cashGroup.add(cash)
  }
}