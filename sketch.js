var fairy, fairy_activate, fairy_deactivate;
var backImage;
var star, starImage;
const Engine= Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var music;




function preload()
{
   //preload the images here
   
   fairy_activate = loadAnimation("images/fairy1.png","images/fairy2.png");
   backImage = loadImage("images/starnight.png");
   starImage = loadImage("images/star.png");
   
  
}

function setup() {
  createCanvas(800, 750);
  
  fairy = createSprite(130,520,50,50);
  fairy.addAnimation("activate", fairy_activate);
  fairy.scale = 0.25

  star = createSprite(650,30,10,10);
  star.addImage("star",starImage);
  star.scale = 0.2

  

  engine = Engine.create();
  world = engine.world;

  starBody = Bodies.circle(650,30,5,{restitution:0.5, isStatic:true});
  World.add(world, starBody);

  Engine.run(engine);

}


function draw() {
  background(backImage);
Engine.update(engine);
 star.x = starBody.position.x;
 star.y = starBody.position.y;

 if(star.y > 470 && starBody.position.y > 470){
   Matter.Body.setStatic(starBody,true);
 }

  
  keyPressed();
  
  drawSprites();
}
function keyPressed(){

  if(keyCode === RIGHT_ARROW){
    fairy.x = fairy.x + 7
  }
  if(keyCode === LEFT_ARROW){
    fairy.x = fairy.x - 7
  }
  if(keyCode === UP_ARROW){
    fairy.velocityX = 0
  }
  if(keyCode === DOWN_ARROW){
    Matter.Body.setStatic(starBody,false);
  }

}

