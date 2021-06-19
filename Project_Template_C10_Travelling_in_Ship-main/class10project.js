var ship,sea;


function preload(){
 seaImg=loadImage("sea.png")
 shipImg1=loadAnimation("ship-1.png");
 shipImg2=loadAnimation("ship-2.png");
}

function setup(){
  createCanvas(400,400);
  ship=createSprite(200,200,40,50);
  ship.addAnimation("shipImg1",shipImg1);
  ship.addAnimation("shipImg2",shipImg2);
  
}

function draw() {
  background("blue");
  drawSprites();
  ship.scale=0.4;
  
  
}