var garden,rabbit,apple,leaf;
var gardenImg,rabbitImg,appleImg,leafImg;




function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("leaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
  // Moving background
  garden=createSprite(200,200);
  garden.addImage(gardenImg);

  //creating boy running
  rabbit = createSprite(180,340,30,30);
  rabbit.scale =0.09;
  rabbit.addImage(rabbitImg);

  var select_sprites = Math.round(random(1,2));

  
}


function createApples(){
 if(frameCount% 100==0){
 var apple = createSprite(100,200,20,20)
 apple.velocityY=3;
}
}
 
 
function draw() {
  background(0);
  rabbit.x =mouseX;
  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
}